"use client";

import { FormEvent, useState } from "react";
import Banner from "@/components/about/Banner";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Link from "next/link";

const enquiryTypes = [
  "Table Enquiry",
  "Private Event",
  "Menu Question",
  "Business Collaboration",
  "Other",
];

export default function ContactPageClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState(enquiryTypes[0]);
  const [preferredDate, setPreferredDate] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = `你好，我想联系 ${siteConfig.nameZh}（${siteConfig.name}）。\n\n名字：${name}\n联系电话：${phone}\n咨询类型：${enquiryType}\n希望日期：${preferredDate || "未填写"}\n人数：${guests || "未填写"}\n留言：${message}`;

    window.open(
      getWhatsAppUrl(text),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="text-amber-50">
      <Banner
        title="联系我们"
        src="/images/contact/header.webp"
        alt="咖啡店联系页面背景"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 shadow-lg">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-200">
              Contact Us
            </p>

            <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
              欢迎来店里喝一杯咖啡
            </h2>

            <p className="mt-5 leading-8 text-amber-50/85">
              如果你想了解菜单、预订座位、询问营业时间，或想和我们合作，可以通过
              WhatsApp 联系我们。我们会尽快回复你。
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4">
                <h2 className="text-lg font-semibold text-amber-100">
                  WhatsApp / 电话
                </h2>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-amber-50/85 underline underline-offset-4 hover:text-amber-200"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4">
                <h2 className="text-lg font-semibold text-amber-100">Email</h2>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-amber-50/85 underline underline-offset-4 hover:text-amber-200"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4">
                <h2 className="text-lg font-semibold text-amber-100">地址</h2>
                <p className="mt-2 text-amber-50/85">{siteConfig.address}</p>
              </div>

              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4">
                <h2 className="text-lg font-semibold text-amber-100">
                  营业时间
                </h2>

                <div className="mt-3 space-y-2">
                  {siteConfig.businessHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between gap-4 text-sm text-amber-50/85"
                    >
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            aria-describedby="form-privacy-note"
            className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 shadow-lg"
          >
            <h2 className="text-3xl font-bold">发送询问</h2>

            <p
              id="form-privacy-note"
              className="mt-3 text-sm leading-6 text-amber-50/80"
            >
              填写后只会在你的浏览器中生成消息并打开 WhatsApp；本网站不会把表单内容提交到服务器或数据库。详见
              <Link
                href="/privacy"
                className="ml-1 underline underline-offset-4 hover:text-amber-200"
              >
                隐私政策
              </Link>
              。
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-amber-100"
                >
                  名字
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="请输入你的名字"
                  required
                  className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-amber-100"
                >
                  电话
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="例如：012-345 6789"
                  required
                  className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-type"
                  className="mb-2 block text-sm font-medium text-amber-100"
                >
                  咨询类型
                </label>
                <select
                  id="enquiry-type"
                  name="enquiryType"
                  value={enquiryType}
                  onChange={(event) => setEnquiryType(event.target.value)}
                  required
                  className="w-full rounded-xl border border-amber-50/30 bg-stone-950 px-4 py-3 text-amber-50 outline-none focus:border-amber-200"
                >
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="preferred-date"
                    className="mb-2 block text-sm font-medium text-amber-100"
                  >
                    希望日期（选填）
                  </label>
                  <input
                    id="preferred-date"
                    name="preferredDate"
                    type="date"
                    value={preferredDate}
                    onChange={(event) => setPreferredDate(event.target.value)}
                    className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none [color-scheme:dark] focus:border-amber-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-sm font-medium text-amber-100"
                  >
                    人数（选填）
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                    placeholder="例如：2"
                    className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-amber-100"
                >
                  留言
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="想询问菜单、座位、营业时间或合作内容..."
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-amber-100 px-6 py-3 font-semibold text-stone-950 transition hover:bg-white"
              >
                通过 WhatsApp 发送
              </button>
            </div>
          </form>
        </section>

        <section
          id="location"
          className="scroll-mt-24 overflow-hidden rounded-3xl border border-amber-500/50 bg-black/30 shadow-lg"
        >
          <div className="p-5">
            <h2 className="text-3xl font-bold">店铺位置</h2>
            <p className="mt-2 text-sm text-amber-50/80">
              地图显示 Mont Kiara 店址；出发前可通过 WhatsApp 确认座位与营业安排。
            </p>
          </div>

          <iframe
            title={`${siteConfig.name} Google Map 店铺位置`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              siteConfig.address,
            )}&output=embed`}
            className="h-80 w-full border-0 lg:h-96"
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
}
