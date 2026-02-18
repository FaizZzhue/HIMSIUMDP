"use client";

import { useMemo, useRef, useState } from "react";
import { CONTENT } from "@/types/content";
import type { BidangDetail } from "@/types/types";
import BidangKabinetSection from "./modules/Bidang";
import PengurusKabinetSection from "./modules/Pengurus";

function buildBphBidangDetail(): BidangDetail {
    return {
        id: "bph",
        name: "Badan Pengurus Harian",
        logo: "/images/logo/logo-himsi.png",
        desc: "Badan Pengurus Harian yang mengoordinasikan seluruh jalannya organisasi.",
        leaders: CONTENT.kabinet.bph.map((person) => ({
            name: person.name,
            role: person.role,
            avatar: person.avatar,
        })),
        divisions: [],
    };
}

export default function BidangPengurus() {
    const bidangRef = useRef<HTMLElement | null>(null);
    const anggotaRef = useRef<HTMLElement | null>(null);
    const [selectedId, setSelectedId] = useState<BidangDetail["id"]>("bph");

    const selectedBidang = useMemo(() => {
        if (selectedId === "bph") {
            return buildBphBidangDetail();
        }

        return CONTENT.kabinet.bidang.find((item) => item.id === selectedId) ?? null;
    }, [selectedId]);

    const goToAnggota = (id: BidangDetail["id"]) => {
        setSelectedId(id);
        requestAnimationFrame(() => {
            anggotaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    };

    const backToBidang = () => {
        bidangRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <BidangKabinetSection
                sectionRef={bidangRef}
                bidangList={CONTENT.kabinet.bidang}
                onClickAnggota={goToAnggota}
            />

            <PengurusKabinetSection
                sectionRef={anggotaRef}
                bidang={selectedBidang}
                onBackToBidang={backToBidang}
                himsiLogo="/images/logo/logo-himsi.png"
                kabinetLogo="/images/logo/logo-kabinet.png"
            />
        </>
    );
}
