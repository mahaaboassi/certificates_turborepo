import { apiRoutes } from "@repo/utils/apiRoutes";
import { Helper } from "@repo/utils/helper";
import { Badge }  from "@repo/ui/badge"


type Props = {
  params: Promise<{
    qrToken: string;
  }>;
};

const Certificate = async ({ params }: Props) => {
  const { qrToken } = await params;

  const {response, message} = await Helper({
    url: apiRoutes.certifications.getOneByQR(qrToken),
    method: "GET",
    hasToken: false,
    isFetchfresh: true,
    origin_url: process.env.NEXT_PUBLIC_APP_URL || window.location.origin,
  });

  const data = response?.data;
  console.log(message)
  if (!response || response.err == "1") {
    return     <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] p-6">
      <div className="bg-[var(--card)] shadow-xl rounded-2xl w-full max-w-3xl p-8 space-y-6 border border-[var(--border)] text-center">

        {/* HEADER */}
        <h1 className="text-xl font-bold text-[var(--danger)]">
          Certificate Not Found
        </h1>
        <p className="text-[var(--text_secondary)]">
          We couldn’t find a certificate for this QR token.
        </p>

        {/* OPTIONAL DEBUG INFO (safe fallback) */}
        <div className="text-sm text-gray-500 space-y-1">
          <p>
            Token: <span className="font-mono">{qrToken}</span>
          </p>

          {message && (
            <p>
              Message: <span className="font-semibold">{message}</span>
            </p>
          )}
        </div>
      </div>

      <footer className="mt-6 text-sm text-[var(--text_secondary)]">
        Certificate Verification System
      </footer>
    </div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] p-6">
      {/* CARD */}
      <div className="bg-[var(--card)] shadow-xl rounded-2xl w-full max-w-3xl p-8 space-y-6 border border-[var(--border)]">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-[var(--primary)]">
            {data.institution?.name}
          </h1>

          { data.status == "ACCEPTED" && <Badge label="Accepted" status="success" />}
          { data.status == "UNDER_REVIEW" && <Badge label="Under Review" status="warning" />}
          { data.status == "REJECTED" && <Badge label="Rejected" status="danger" />}
        </div>

        {/* TITLE */}
        <div className="text-center space-y-2">
          <p className="text-sm text-[var(--text_secondary)]">
            CERTIFICATE OF COMPLETION
          </p>

          <h2 className="text-2xl font-bold text-[var(--text_primary)]">
            {data.title}
          </h2>

          <p className="text-[var(--grey)]">
            This is to certify that{" "}
            <span className="font-semibold text-black">
              {data.holderName}
            </span>
          </p>

          <p className="text-sm text-[var(--text_secondary)]">
            {data.holderEmail}
          </p>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-4 gap-4 text-center text-sm border-t pt-4">
          <div>
            <p className="text-[var(--text_secondary)]">GRADE</p>
            <p className="font-bold">{data.grade || "-"}</p>
          </div>

          <div>
            <p className="text-[var(--text_secondary)]">HOURS</p>
            <p className="font-bold">{data.hours || "-"}</p>
          </div>

          <div>
            <p className="text-[var(--text_secondary)]">ISSUED</p>
            <p className="font-bold">
              {new Date(data.issuedAt).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-[var(--text_secondary)]">EXPIRES</p>
            <p className="font-bold">
              {data.expiresAt
                ? new Date(data.expiresAt).toLocaleDateString()
                : "Never"}
            </p>
          </div>
        </div>

        {/* IMAGES */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4">
            <img
              src={`http://localhost:4000/${data.qrImage}`}
              alt="QR"
              width={80}
              height={80}
            />

            <div className="text-xs text-[var(--text_secondary)]">
              <p>Certificate No.</p>
              <p className="font-bold text-[var(--primary)]">
                {data.certificateNo}
              </p>
            </div>
          </div>

          {data.certificateImage && (
            <img
              src={`http://localhost:4000/${data.certificateImage}`}
              alt="Certificate"
              width={120}
              height={120}
              className="rounded-lg"
            />
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-6 text-sm text-[var(--text_secondary)]">
        Certificate Verification System
      </footer>
    </div>
  );
};

export default Certificate;