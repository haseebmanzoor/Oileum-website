// src/data/serviceDetails/engineering-services.js

const engineeringServices = {
  title: "Engineering Services",
  slug: "engineering-services",
  heroImage: "/images/services/engineering.jpg", // Updated image path
  shortDescription:
    "Oileum Engineering Services delivers advanced civil, structural, mechanical, electrical, and instrumentation engineering solutions tailored to refineries and oil & gas facilities.",
  sections: [
    {
      heading: "Structural & Civil Engineering Design",
      content:
        "Oileum Engineering Services delivers advanced civil and structural engineering solutions tailored to refinery and oil & gas facilities. Our expertise covers the design of foundations, steel structures, pipe racks, equipment platforms, and storage tank foundations. We ensure compliance with global standards such as ASCE, AISC, and API 650, ensuring robustness against seismic, wind, and thermal loads. Our engineers optimize layouts for constructability, corrosion resistance, and long-term reliability.",
    },
    {
      heading: "Design & Standards Follow",
      content: [
        "Codes: ASCE 7, AISC, Eurocodes, API 650/620 (for storage tanks), API 653 (tank inspection), API RP 2A (offshore structures), local seismic codes, and local building codes.",
        "Material selection: metals (steel, stainless steel), concrete, and coatings — considering chemical exposure, temperature extremes, high humidity, and corrosive atmospheres.",
        "Load types: dead load, live load, wind load, snow, earthquake, blast loads, thermal loads, and loads from piping vibration.",
      ],
    },
    {
      heading: "Mechanical (Static & Rotating Equipment) Engineering",
      content:
        "Our mechanical team specializes in the design and analysis of both static and rotating equipment. Static equipment includes pressure vessels, heat exchangers, and storage tanks designed as per ASME and TEMA standards. Rotating equipment expertise covers pumps, compressors, and turbines engineered for high reliability and efficiency. We employ advanced tools such as ANSYS and CAESAR II for stress and vibration analysis.",
    },
    {
      heading: "Mechanical Design Considerations",
      content: [
        "Material selection (considering corrosion, high temperature, pressure).",
        "Thickness calculations using codes (ASME Section VIII Div 1/2, TEMA for exchangers, API standards).",
        "Nozzle orientation, support design, and allowances for thermal expansion.",
        "Inspection & maintenance access, safety relief valves, and insulation.",
        "Rotor dynamics: balancing, vibration analysis, bearing selection.",
        "Thermodynamics: efficiency, flow rates, head (for pumps), pressure ratios (for compressors).",
        "Mechanical integrity: shafts, couplings, seals, and lubrication systems.",
      ],
    },
    {
      heading: "Standards & Tools",
      content: [
        "API standards (e.g. API 610 for centrifugal pumps, API 617 for centrifugal compressors).",
        "ISO standards and relevant local codes.",
        "Finite Element Analysis (FEA) for stress evaluation.",
        "CAESAR II for pipe stress analysis.",
        "Computational Fluid Dynamics (CFD) for internal flow and thermal studies.",
      ],
    },
    {
      heading: "Electrical & Instrumentation Engineering",
      content:
        "Oileum provides comprehensive electrical and instrumentation engineering services for refineries. We handle power distribution and generation systems including substations, transformers, switchgear, and bus ducts. Our expertise includes motor control centers, lighting systems (process and emergency), earthing/grounding systems, power protection (relays, fault coordination), and hazardous area equipment selection. We also specialize in measurement and control devices — sensors, transmitters, control valves, and actuators integrated into advanced automation systems.",
    },
    {
      heading: "Control Systems & Instrumentation",
      content: [
        "PLCs (Programmable Logic Controllers), DCS (Distributed Control Systems), SCADA, ESD (Emergency Shutdown), Fire & Gas systems.",
        "Control loops, cause & effect diagrams, hook-ups, and control logic.",
        "Control valves, actuators, transmitters, gauges, and signal conditioning.",
      ],
    },
    {
      heading: "Documentation",
      content: [
        "Instrument Index and IO (Input/Output) lists.",
        "Cable schedules, wiring diagrams, and single-line diagrams.",
        "Loop drawings, cause & effect diagrams, datasheets, and vendor documentation.",
      ],
    },
    {
      heading: "Standards & Practices (E&I)",
      content: [
        "IEC standards (e.g. IEC 61508 / IEC 61511 for functional safety).",
        "ISA standards (ISA-5 for instrument symbols, ISA-18 for alarms).",
        "Hazardous area classification and explosion-proof equipment selection (NEC / IEC zones).",
        "Calibration, accuracy, and traceability procedures.",
      ],
    },
    {
      heading: "Front-End Engineering Design (FEED) & Detailed Engineering",
      content:
        "Our FEED services define project scope, process flow, and cost estimation to establish a strong foundation for execution. During detailed engineering, we finalize layouts, datasheets, isometrics, and equipment specifications with a focus on constructability, operability, and seamless integration with procurement and construction.",
    },
    {
      heading: "FEED (Front-End Engineering Design)",
      content: [
        "Define project scope, process flows, mass and energy balances, preliminary equipment selection, and site layout.",
        "Estimate costs and reduce project uncertainty for improved bidding and procurement decisions.",
      ],
    },
    {
      heading: "Detailed Engineering",
      content: [
        "Finalize equipment specifications, GA drawings, isometrics, piping class specifications, instrumentation hook-ups, and structural/electrical drawings.",
        "Procurement engineering: vendor drawing reviews, purchase orders, and technical bid evaluations.",
        "Construction readiness: installation drawings, erection procedures, and method statements.",
      ],
    },
    {
      heading: "Project Support & Technical Consultancy",
      content:
        "We offer technical consultancy, value engineering, and project management support throughout the lifecycle of refinery projects. Our experts assist in feasibility studies, vendor evaluations, and technical audits, ensuring quality and efficiency at every stage.",
    },
    {
      heading: "Process Simulation, Optimization & Energy Studies",
      content:
        "Using process simulation tools like Aspen HYSYS, we perform mass-energy balances and optimization studies to enhance process efficiency. Our engineers identify opportunities for energy recovery, emission reduction, and cost optimization to ensure sustainable operations.",
    },
    {
      heading: "Process Modification & Test Run Studies",
      content:
        "We conduct debottlenecking studies, plant modifications, and test runs to validate design performance. Our field engineers work closely with client teams during commissioning to ensure safe operations, accurate data collection, and reliable plant performance.",
    },
    {
      heading: "Piping & Instrumentation Diagrams (P&IDs) & Documentation",
      content:
        "Our P&IDs provide clear representations of process flows, control loops, and safety interlocks. We develop and maintain comprehensive documentation including line lists and datasheets — the backbone of all engineering deliverables.",
    },
  ],
};

export default engineeringServices;
