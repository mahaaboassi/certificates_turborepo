import { apiRoutes } from "@repo/utils/apiRoutes";
import { Helper } from "@repo/utils/helper";
import { Badge }  from "@repo/ui/badge"
import { GoldenArrowsBackground } from "../../../components/animations/background";
import LottieAnimation from "../../../components/animations/cap";
import { Landmark, ShieldCheck, ShieldX } from "lucide-react"
import LottieAnimationFrame from "../../../components/animations/frame";
import LottieAnimationExclamationMark from "../../../components/animations/exclamationMark";
type Props = {
  params: Promise<{
    qrToken: string;
  }>;
};

const Certificate = async ({ params }: Props) => {
  const { qrToken } = await params;
  const result = await Helper({
    url: apiRoutes.certifications.getOneByQR(qrToken),
    method: "GET",
    origin_url: process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:4000",
  });
  console.log( "********", result.data.data )
  const data = result?.data?.data;

  if (!result.data.data || result.data.data.err == "1" || data.status != "ACCEPTED") {
    return <div>   
      <GoldenArrowsBackground/>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] p-6">
        <div className="bg-[var(--card)] relative shadow-xl rounded-2xl w-full max-w-3xl p-8 space-y-6 border border-[var(--border)] text-center">
          {/* Graduation Cap Animation */}
          <div className="absolute z-10 -top-10 -right-15">
            <LottieAnimation/>
          </div>
          {/* HEADER */}
          <div className="spacy-y-2 items-center">
            <LottieAnimationExclamationMark/>
            <h1 className="text-3xl font-bold text-[var(--danger)]">
              Certificate Not Found
            </h1>
          </div>
          
          <p className="text-[var(--text_secondary)]">
            We couldn’t find a certificate for this QR token.
          </p>

          {/* OPTIONAL DEBUG INFO (safe fallback) */}
          <div className="text-sm text-gray-500 space-y-1">
            <p>
              Token: <span className="font-mono">{qrToken}</span>
            </p>
          </div>
          {/* Authentication */}
          <div className="flex justify-center">
            <Badge icon={<ShieldX />} label="Verified Certificate" status="danger" />
          </div>
        </div>

        <footer className="mt-6 text-sm text-[var(--text_secondary)]">
          Certificate Verification System
        </footer>
      </div>
    </div> ;
  }

  return (<div>
    
    <GoldenArrowsBackground/>
    <div className="min-h-screen border-x-4 border-[var(--accent)] relative z-1 flex flex-col items-center justify-center p-6">

      {/* CARD */}
      <div className="bg-[var(--card)]  relative shadow-xl rounded-2xl w-full max-w-3xl p-8 space-y-6 border border-[var(--border)]">
        {/* Graduation Cap Animation */}
        <div className="absolute z-10 -top-10 -right-15">
          <LottieAnimation/>
        </div>
        {/* Frame Animation */}
        <div className="absolute z-10 top-4 left-4">
          <LottieAnimationFrame/>
        </div>
        {/* HEADER */}
        <div className="flex items-center justify-center gap-3 pb-6 border-b border-[rgb(var(--light_grey-rgb)/0.2)] ">
          <div className="bg-[rgb(var(--light_grey-rgb)/0.2)] p-2 ">
            <Landmark size={20}/>
          </div>
          <h1 className="text-xl font-bold text-[var(--primary)]">
            {data.institution?.name}
          </h1>
        </div>
        {/* Introduction */}
        <div className="space-y-1 text-[var(--text_secondary)] text-center">
            <p className="text-sm  font-semibold tracking-[0.2em]">
              CERTIFICATE OF COMPLETION
            </p>
            <p className="">
              This is to certify that{" "}
            </p>
        </div>
        {/*  Holder Details */}
        <div className="space-y-1 text-center">
            <h2 className="font-semibold text-4xl text-[var(--destructive)]">{data.holderName}</h2>
            {/* <p className="text-sm text-[var(--text_secondary)]">
              {data.holderEmail}
            </p> */}
        </div>
        {/* Program Title */}
          <div className="text-center">
            <p className="text-[var(--text_secondary)] text-md">has successfully completed</p>
            <h3 className="text-3xl font-semibold ">
              {data.title}
            </h3>
          </div>

        {/* DETAILS */}
        <div className="grid grid-cols-4 gap-4 text-center text-sm">
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
        {/* Authentication */}
        <div className="flex justify-center">
          <Badge icon={<ShieldCheck />} label="Verified Certificate" status="success" />
        </div>
        {/* IMAGES */}
        <div className="flex items-center justify-between border-t pt-4 border-[rgb(var(--light_grey-rgb)/0.2)] ">
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
  </div>
  );
};

export default Certificate;