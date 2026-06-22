import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "MERIT ACC TAX สำนักงานบัญชีครบวงจร";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          border: "2px solid #000000",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#000000",
            }}
          >
            MERIT ACC TAX
          </div>
          <div
            style={{
              fontSize: 15,
              color: "#666666",
            }}
          >
            meritacctax.com
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#000000",
              lineHeight: 1.1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>บัญชี ภาษี</span>
            <span>ครบจบในที่เดียว</span>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#444444",
              letterSpacing: "-0.01em",
            }}
          >
            รับทำบัญชี • ปิดงบ • ตรวจสอบบัญชี • จดทะเบียนบริษัท
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid #eaeaea",
          }}
        >
          <div style={{ display: "flex", gap: 28, fontSize: 16, color: "#666666" }}>
            <span>📞 082-498-9442</span>
            <span>ประสบการณ์กว่า 10 ปี</span>
          </div>
          <div
            style={{
              background: "#000000",
              color: "#ffffff",
              fontSize: 15,
              fontWeight: 700,
              padding: "10px 24px",
              borderRadius: 8,
            }}
          >
            ปรึกษาฟรี
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
