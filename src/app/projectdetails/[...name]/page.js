"use client";
import { useEffect, useState } from "react";
import { ProjectDetails } from "@/components/Work/work2";
import FooterBar from "@/components/footer";
import { Navbarr } from "@/components/landing_slide";
import React from "react";

export default function Project() {
  const [id, setId] = useState(null);
  useEffect(() => {
    // get the id from url and set it to state
    setId(window.location.href.split("/").pop());
    // console.log(id);
    // console.log(window.location.href.split("/").pop());
  }, []);

  return (
    <div className="bg-slate-100 w-[100vw] h-fit gil-reg">
      <Navbarr noScrollEffect={true} />
      <div className="h-20" />
      <div className="w-[90%] m-auto py-8">
        {id != null && <ProjectDetails index={id} />}
      </div>
      <FooterBar />
    </div>
  );
}
