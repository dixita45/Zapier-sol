"use client";
import { useRouter } from "next/navigation";
import { Feature } from "./Feature";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";

export const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-5xl font-bold font-semibold text-center pt-8 max-w-xl">
          Automate as fast as you can type
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <div className="text-xl font-bold font-normal text-center pt-8 max-w-2xl">
          AI gives you automation superpowers, and Zapier puts them to work.
          Pairing AI and Zapier helps you turn ideas into workflows and bots
          that work for you.
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <div className="flex">
          <PrimaryButton
            onClick={() => {
              router.push("/signup");
            }}
            size="big"
          >
            Start free with email
          </PrimaryButton>
          <div className="pl-4">
            <SecondaryButton onClick={() => {}} size="big">
              <div className="flex items-center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2041 8.34882V12.3006H15.6958C15.4546 13.5715 14.731 14.6476 13.6456 15.3712L16.9573 17.9408C18.8868 16.1597 20 13.5437 20 10.4361C20 9.71257 19.9351 9.01677 19.8145 8.34892L10.2041 8.34882Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M4.48548 12.1463L3.73857 12.7181L1.09473 14.7774C2.77377 18.1077 6.21509 20.4083 10.2039 20.4083C12.959 20.4083 15.2688 19.4992 16.9572 17.9408L13.6455 15.3712C12.7364 15.9834 11.5768 16.3545 10.2039 16.3545C7.55088 16.3545 5.29677 14.5641 4.48966 12.1522L4.48548 12.1463Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M1.09454 5.63083C0.398843 7.00369 0 8.55289 0 10.2041C0 11.8553 0.398843 13.4045 1.09454 14.7773C1.09454 14.7865 4.4898 12.1428 4.4898 12.1428C4.28571 11.5306 4.16509 10.8812 4.16509 10.204C4.16509 9.5267 4.28571 8.87739 4.4898 8.26514L1.09454 5.63083Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M10.2042 4.0631C11.707 4.0631 13.0428 4.58257 14.1096 5.58444L17.0316 2.66238C15.2598 1.01119 12.9593 0 10.2042 0C6.2153 0 2.77377 2.29129 1.09473 5.63083L4.48987 8.26536C5.29688 5.85345 7.5511 4.0631 10.2042 4.0631Z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="ml-2">Start free with Google</span>
              </div>
            </SecondaryButton>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Feature title={"Free Forever"} subtitle={"for core features"} />
        <Feature title={"More apps"} subtitle={"than any other platforms"} />
        <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
      </div>
    </div>
  );
};
