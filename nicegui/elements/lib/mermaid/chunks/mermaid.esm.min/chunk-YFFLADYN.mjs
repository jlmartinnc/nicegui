import{f as a}from"./chunk-D3PZO57J.mjs";import{a as n}from"./chunk-GTKDMUJJ.mjs";var t={},c={info:a(async()=>{let{createInfoServices:e}=await import("./info-PWGDJKR5-T7ZKA3RY.mjs"),r=e().Info.parser.LangiumParser;t.info=r},"info"),packet:a(async()=>{let{createPacketServices:e}=await import("./packet-7PPW3X5M-O6SZ3T2R.mjs"),r=e().Packet.parser.LangiumParser;t.packet=r},"packet"),pie:a(async()=>{let{createPieServices:e}=await import("./pie-RF5LNP4B-V656W2AT.mjs"),r=e().Pie.parser.LangiumParser;t.pie=r},"pie"),gitGraph:a(async()=>{let{createGitGraphServices:e}=await import("./gitGraph-F2EDSAW4-LKDW3VZQ.mjs"),r=e().GitGraph.parser.LangiumParser;t.gitGraph=r},"gitGraph")};async function p(e,r){let i=c[e];if(!i)throw new Error(`Unknown diagram type: ${e}`);t[e]||await i();let o=t[e].parse(r);if(o.lexerErrors.length>0||o.parserErrors.length>0)throw new m(o);return o.value}n(p,"parse");a(p,"parse");var m=class extends Error{static{n(this,"MermaidParseError")}constructor(e){let r=e.lexerErrors.map(s=>s.message).join(`
`),i=e.parserErrors.map(s=>s.message).join(`
`);super(`Parsing failed: ${r} ${i}`),this.result=e}static{a(this,"MermaidParseError")}};export{p as a};