import {
  Heart,
  CreditCard,
  Copy,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";
import Footer from "../Components/Footer";

const Gift = () => {
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [copiedField, setCopiedField] = useState("");

  const bankDetails = {
    bankName: "First Bank of Nigeria",
    accountName: "IDOKO GILBERT OWOICHO",
    accountNumber: "3099901135",
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000);
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-14">
      {/* Header Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-[pacifo]">
            GIFTS & SUPPORT
          </h1>
          <div className="flex items-center justify-center mb-6">
            <span className="w-12 h-[1px] bg-gray-300"></span>
            <Heart className="mx-3 w-6 h-6 text-red-500" />
            <span className="w-12 h-[1px] bg-gray-300"></span>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your presence at our wedding is already the greatest gift. ❤️
            However, if you would like to support us with a token of love, here
            are a few simple ways you can celebrate with us.
          </p>
        </div>
      </section>

      {/* Ways to Support Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
            WAYS TO SUPPORT US
          </h3>

          {/* Bank Transfer Section (unchanged logic) */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-red-500 mb-4">
                  <CreditCard className="w-12 h-12 mx-auto" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Direct Bank Transfer
                </h4>
                <p className="text-gray-600 mb-6">
                  You can send your gift directly to our bank account. It's a
                  simple and secure way to show your love.
                </p>

                <button
                  onClick={() => setShowAccountDetails(!showAccountDetails)}
                  className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200 mx-auto"
                >
                  {showAccountDetails ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                  <span>
                    {showAccountDetails ? "Hide" : "Show"} Account Details
                  </span>
                </button>
              </div>

              {/* Account Details (unchanged) */}
              {showAccountDetails && (
                <div className="bg-gray-50 rounded-lg p-6 space-y-4 mt-6">
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <div className="text-left">
                      <p className="text-sm text-gray-500 font-medium">
                        Bank Name
                      </p>
                      <p className="text-gray-800 font-semibold">
                        {bankDetails.bankName}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(bankDetails.bankName, "bankName")
                      }
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <div className="text-left">
                      <p className="text-sm text-gray-500 font-medium">
                        Account Name
                      </p>
                      <p className="text-gray-800 font-semibold">
                        {bankDetails.accountName}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(bankDetails.accountName, "accountName")
                      }
                      className="text-red-500 hover:text-red-500 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <div className="text-left">
                      <p className="text-sm text-gray-500 font-medium">
                        Account Number
                      </p>
                      <p className="text-gray-800 font-semibold font-mono">
                        {bankDetails.accountNumber}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          bankDetails.accountNumber,
                          "accountNumber"
                        )
                      }
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>

                  {copiedField && (
                    <div className="text-center">
                      <p className="text-green-600 text-sm font-medium">
                        ✓{" "}
                        {copiedField === "bankName"
                          ? "Bank name"
                          : copiedField === "accountName"
                          ? "Account name"
                          : copiedField === "accountNumber"
                          ? "Account number"
                          : ""}{" "}
                        copied!
                      </p>
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 rounded-lg lg:p-4 mt-4">
                    <p className="text-blue-800 text-sm">
                      <strong>💡 Tip:</strong> Please include{" "}
                      <em>"Wedding Gift - Gilbert & Doris"</em> in the transfer
                      description so we can properly thank you. 🙏
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="bg-red-500 text-white py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-2xl md:text-3xl  mb-6 font-oswald">
            THANK YOU FROM OUR HEARTS
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            We are truly grateful for your love, support, and prayers. Whether
            you bless us with your presence, a gift, or a kind word — it means
            the world to us.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            May God bless you abundantly as you celebrate with us.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Heart className="w-8 h-8 text-pink-200" />
            <p className="text-xl font-semibold">Gilbert & Doris</p>
            <Heart className="w-8 h-8 text-red-200" />
          </div>
        </div>
      </section>
      <Footer image="url('assets/images/two.jpg')" position="center 38%" />
    </div>
  );
};

export default Gift;
