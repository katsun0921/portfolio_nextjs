import type { NextPage } from "next";
import type { ReactElement } from "react";
import Image from "next/image";
import Layout from "@components/Layout"

const contactPage: NextPage = (): ReactElement => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact Info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/image/avatar.png"
            alt="Avatar"
            width={60}
            height={60}
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">City A</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">abc@example.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-123-456</p>
        </div>
      </div>
    </Layout>
  );
};

export default contactPage;
