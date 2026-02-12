"use client";


import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileKabinetSection() {
    return (
        <section>
            <div className="mt-40">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}                                                           
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px]"
                >
                    <div className="relative h-[220px] sm:h-[280px] md:h-[340px]">
                        <Image
                            src="/images/hero/hero-4.png"
                            alt="Kegiatan HIMSI"
                            fill
                            className="w-full object-cover object-center"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 900px, 1024px"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}       