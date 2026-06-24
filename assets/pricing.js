/* Lyzoo pricing — transcribed from "Fulfilment Centre Charges (ex. VAT)".
   All prices GBP, exclusive of VAT. Shipping is enquiry-only by design. */
window.LYZOO_PRICING = {
  currency: "£",
  note: "All prices exclude VAT. Shipping quoted separately on enquiry.",

  /* Prep charges — per unit unless noted */
  prep: [
    { id: "fnsku",    name: "FNSKU Labelling",   price: 0.08, unit: "unit", desc: "Label products in conformity with Amazon rules" },
    { id: "pbS",      name: "Polybag — Small",   price: 0.25, unit: "unit", desc: "Polybagging with suffocation warning labels" },
    { id: "pbM",      name: "Polybag — Medium",  price: 0.29, unit: "unit", desc: "Polybagging with suffocation warning labels" },
    { id: "pbL",      name: "Polybag — Large",   price: 0.42, unit: "unit", desc: "Polybagging with suffocation warning labels" },
    { id: "bw",       name: "Bubble Wrap",       price: 0.50, unit: "unit", desc: "Packaging products in bubble wrap" },
    { id: "bwM",      name: "Bubble Wrap — Medium", price: 0.67, unit: "unit", desc: "Packaging products in bubble wrap" },
    { id: "cartS",    name: "Carton — Small",    price: 0.83, unit: "unit", desc: "Box products" },
    { id: "cartM",    name: "Carton — Medium",   price: 1.17, unit: "unit", desc: "Box products" },
    { id: "cartL",    name: "Carton — Large",    price: 1.50, unit: "unit", desc: "Box products" },
    { id: "bundle",   name: "Bundling",          price: 0.25, unit: "bundle", desc: "Bundles up to 3 units (+£0.05 per extra unit)" },
    { id: "unbundle", name: "Un-bundling",       price: 0.04, unit: "unit", desc: "Un-bundling units (per unit)" }
  ],

  /* Receiving, storage & handling essentials */
  receiving: [
    { id: "recv",    name: "Receiving & Inspection", price: 0.04, unit: "unit", desc: "Receive your goods and inspect your products" },
    { id: "palletP", name: "Pallet Processing",      price: 5.85, unit: "pallet", desc: "Complete pallet handling and processing" },
    { id: "caseP",   name: "Case Processing",        price: 2.10, unit: "case", desc: "Total cases leaving our facility, incl. cases within pallets" }
  ],

  storage: { id: "storage", name: "Storage", price: 16.67, unit: "m³ / 30 days", desc: "Storage per cubic metre for 30 days" },

  returns: [
    { id: "rUnit",   name: "Units (Returns)",          price: 0.10, unit: "unit", desc: "Units returned by Amazon" },
    { id: "rHandle", name: "Returns Handling",         price: 0.25, unit: "unit", desc: "Inspect, sort & check condition (sellable / rework / unsellable)" },
    { id: "rBox",    name: "Boxes / Cartons (Returns)",price: 2.00, unit: "box",  desc: "Formula: (Units × £0.12) + (Boxes × £2.00)" }
  ]
};
