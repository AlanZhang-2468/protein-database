"use client";
import { useEffect } from "react";
import { Stage } from "ngl";

export default function NglViewer({ pdbUrl, persp }: { pdbUrl: string; persp: string }) {
 const check = persp
  useEffect(() => {
    const stage = new Stage("viewport", {
      backgroundColor: "#F1FCEB",
      width: "610px",
      height: "541px",
    });

    stage
      .loadFile(pdbUrl)
      .then(function (component) {
        component.removeAllRepresentations();
        component.addRepresentation(check);
        component.autoView();
        // console.log(component.structure.atomCount);
      });

    return () => {
      stage
    };
  }, [pdbUrl, persp, check]);

  return <div id="viewport" style={{ width: "610px", height: "541px" }} />
}
