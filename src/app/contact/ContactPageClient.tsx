"use client";

import { FormEvent, useState } from "react";
import Banner from "@/components/about/Banner";
import { siteConfig } from "@/config/site";


export default function ContactPageClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = encodeURIComponent(
      `你好，我想联系 ${siteConfig.name}。\n\n名字：${name}\n电话：${phone}\n留言：${message}`,
    );

    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${text}`,
      "_blank",
    );
  }

  return (
    <div className="text-amber-50">
      <Banner
        title="联系我们"
        src="/images/contact/header.webp"
        alt="咖啡店联系页面背景"
      />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 shadow-lg">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-200">
              Contact Us
            </p>

            <h1 className="mt-3 text-4xl font-bold lg:text-5xl">
              欢迎来店里喝一杯咖啡
            </h1>

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
                  href={`https://wa.me/${siteConfig.whatsapp}`}
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
            className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 shadow-lg"
          >
            <h2 className="text-3xl font-bold">发送询问</h2>

            <p className="mt-3 text-sm leading-6 text-amber-50/80">
              填写后会自动打开 WhatsApp，不会储存在网站数据库。
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
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="例如：012-345 6789"
                  required
                  className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                />
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

        <section className="overflow-hidden rounded-3xl border border-amber-500/50 bg-black/30 shadow-lg">
          <div className="p-5">
            <h2 className="text-3xl font-bold">店铺位置</h2>
            <p className="mt-2 text-sm text-amber-50/80">
              你可以在这里放 Google Map，方便顾客找到你的店。
            </p>
          </div>

          <iframe
            title="MyCoffee Google Map"
            src="https://www.google.com/maps?q=Kuala%20Lumpur%20Malaysia&output=embed"
            className="h-80 w-full border-0 lg:h-96"
            loading="lazy"
          />
        </section>
      </main>
    </div>
  );
}
