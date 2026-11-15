/**
 * Treatments and Clinical Services Data
 * 
 * Candidate treatment categories from external clinic-directory information.
 * Each candidate service is clearly identified and medically described without
 * misleading promises or fabricated pricing.
 */

export interface TreatmentDetail {
  id: string;
  name: string;
  shortTag: string;
  category: 'Endodontics' | 'Restorative' | 'Oral Surgery' | 'Preventive' | 'Prosthodontics';
  shortDesc: string;
  fullDesc: string;
  status: 'Candidate Service (Clinic Confirmation Pending)' | 'Confirmed Service';
  iconType: 'rct' | 'filling' | 'extraction' | 'wisdom' | 'surgical' | 'scaling' | 'crown' | 'impacted';
  indications: string[];
  whatToExpect: string[];
  patientTips: string[];
  estimatedDuration: string;
}

export const TREATMENTS_DATA: TreatmentDetail[] = [
  {
    id: 'root-canal-treatment',
    name: 'Root Canal Treatment (RCT)',
    shortTag: 'RCT & Nerve Care',
    category: 'Endodontics',
    shortDesc: 'Relieves acute tooth pain by gently treating infected pulp tissue while saving your natural tooth structure.',
    fullDesc: 'When deep decay or dental trauma affects the internal nerve (pulp) of a tooth, Root Canal Treatment carefully removes the damaged tissue, disinfects the internal canals, and seals them with biocompatible filling materials. Our approach focuses on patient comfort with effective local anesthesia, aiming to preserve your natural tooth rather than extracting it.',
    status: 'Candidate Service (Clinic Confirmation Pending)',
    iconType: 'rct',
    indications: [
      'Severe or throbbing toothache, especially while biting',
      'Lingering sensitivity to hot or cold food and drinks',
      'Swelling or tender gums near the affected tooth',
      'Deep decay extending into the tooth pulp',
    ],
    whatToExpect: [
      'Thorough clinical assessment and digital x-ray evaluation',
      'Targeted local anesthesia for an anxiety-free procedure',
      'Gentle cleaning, shaping, and canal disinfection',
      'Hermetic canal sealing followed by protective crown planning',
    ],
    patientTips: [
      'Avoid chewing on the treated tooth until the final permanent restoration is placed',
      'Mild post-procedure soreness can be managed with prescribed medication',
      'Maintain diligent brushing and flossing around the restored tooth',
    ],
    estimatedDuration: 'Typically 1 to 2 visits depending on canal complexity',
  },
  {
    id: 'dental-fillings',
    name: 'Tooth-Colored Dental Fillings',
    shortTag: 'Restorations & Cavities',
    category: 'Restorative',
    shortDesc: 'Restores decayed or chipped teeth using shade-matched composite resins that blend seamlessly with natural enamel.',
    fullDesc: 'Dental fillings are the first line of defense against progressive tooth decay. After carefully cleaning the affected cavity, a durable, tooth-colored composite resin is sculpted and light-cured into place. This reinforces tooth integrity, halts bacterial penetration, and restores full chewing functionality.',
    status: 'Candidate Service (Clinic Confirmation Pending)',
    iconType: 'filling',
    indications: [
      'Visible dark spots, cavities, or pit discoloration',
      'Food constantly getting trapped between specific teeth',
      'Minor chips or fractures along enamel edges',
      'Sensitivity when consuming sweet, cold, or warm items',
    ],
    whatToExpect: [
      'Identification of decayed areas through clinical examination',
      'Gentle removal of decay while preserving maximum healthy enamel',
      'Layer-by-layer bonding of shade-matched composite resin',
      'High-gloss polishing and bite adjustment for natural occlusion',
    ],
    patientTips: [
      'Brush twice daily with fluoride toothpaste to prevent secondary decay',
      'Avoid biting down immediately on hard foods like ice or nuts',
      'Schedule periodic checkups to monitor filling margins',
    ],
    estimatedDuration: '30 to 45 minutes per restoration',
  },
  {
    id: 'tooth-extraction',
    name: 'Gentle Tooth Extraction',
    shortTag: 'Relief & Preservation',
    category: 'Oral Surgery',
    shortDesc: 'Careful, atraumatic removal of non-restorable or fractured teeth when biological preservation is no longer viable.',
    fullDesc: 'While our primary clinical philosophy is to save natural teeth whenever possible, extraction becomes necessary when a tooth is extensively damaged, cracked below the bone level, or presenting persistent infection risk. We use gentle, atraumatic techniques to protect adjacent bone and gum architecture.',
    status: 'Candidate Service (Clinic Confirmation Pending)',
    iconType: 'extraction',
    indications: [
      'Teeth severely damaged by extensive fracture or deep decay beyond repair',
      'Advanced periodontal bone loss causing excessive tooth mobility',
      'Persistent periapical infection that does not respond to endodontic care',
      'Strategic removal planned for orthodontic alignment',
    ],
    whatToExpect: [
      'Comprehensive pre-operative assessment and medical history review',
      'Full local anesthesia to ensure a comfortable experience',
      'Gentle loosening and careful elevation with minimal tissue disruption',
      'Post-operative sterile gauze placement and clear homecare guidance',
    ],
    patientTips: [
      'Keep gentle pressure on the gauze pad for 45 minutes post-extraction',
      'Do not spit, use straws, or rinse vigorously for the first 24 hours to protect the clot',
      'Consume soft, cool foods and avoid hot liquids on the day of treatment',
    ],
    estimatedDuration: '30 to 45 minutes',
  },
  {
    id: 'wisdom-tooth-extraction',
    name: 'Wisdom Tooth Extraction',
    shortTag: 'Third Molar Management',
    category: 'Oral Surgery',
    shortDesc: 'Focused clinical management for troublesome third molars causing jaw stiffness, crowding, or recurrent gum infections.',
    fullDesc: 'Wisdom teeth (third molars) frequently lack adequate arch space to erupt properly, resulting in partial eruption or awkward tilting against neighboring teeth. We evaluate third molar position with x-rays and plan gentle, structured removal to eliminate pain and prevent damage to adjacent second molars.',
    status: 'Candidate Service (Clinic Confirmation Pending)',
    iconType: 'wisdom',
    indications: [
      'Persistent pain, swelling, or redness at the very back of the jaw',
      'Difficulty opening the mouth fully or pain radiating towards the ear',
      'Recurrent infection under the gum flap covering a partially erupted tooth (pericoronitis)',
      'Pressure causing crowding or damage against neighboring molars',
    ],
    whatToExpect: [
      'Radiographic visualization of root angles and proximity to nerves',
      'Profound local anesthesia ensuring complete patient numbness',
      'Systematic, step-by-step removal with gentle irrigation',
      'Dissolvable or standard sutures placed if indicated for clean healing',
    ],
    patientTips: [
      'Apply an external cold pack against the cheek intermittently for the first 24 hours',
      'Stick to lukewarm broths, yogurt, and gentle nutritious soft foods',
      'Begin gentle warm saltwater rinses only after 24 hours have elapsed',
    ],
    estimatedDuration: '45 to 60 minutes depending on tooth positioning',
  },
  {
    id: 'surgical-extraction',
    name: 'Surgical Tooth Extraction',
    shortTag: 'Specialized Oral Surgery',
    category: 'Oral Surgery',
    shortDesc: 'Precision surgical technique for broken-down roots or complex tooth morphology requiring delicate tissue access.',
    fullDesc: 'Surgical extractions are performed when a tooth has fractured at the gumline, has complex or curved roots, or remains partially submerged under bone. Dr. Yadav utilizes microsurgical instruments and conservative bone-preserving protocols to facilitate clean healing and minimize recovery downtime.',
    status: 'Candidate Service (Clinic Confirmation Pending)',
    iconType: 'surgical',
    indications: [
      'Teeth broken flush with or beneath the gum margin',
      'Anatomically curved, divergent, or brittle root structures',
      'Teeth firmly integrated with dense jawbone requiring sectional removal',
      'Retained root fragments left behind from prior incomplete extractions',
    ],
    whatToExpect: [
      'Detailed pre-surgical imaging and anatomical evaluation',
      'Thorough anesthesia to keep the surgical site completely desensitized',
      'Small, precise incision and conservative bone relief if necessary',
      'Sterile saline irrigation and protective closure with fine sutures',
    ],
    patientTips: [
      'Take prescribed medications strictly as advised by Dr. Yadav',
      'Rest quietly with head slightly elevated on the first evening',
      'Contact the clinic via WhatsApp if you experience prolonged bleeding or unexpected concerns',
    ],
    estimatedDuration: '45 to 75 minutes',
  },
  {
    id: 'scaling-and-polishing',
    name: 'Ultrasonic Scaling & Enamel Polishing',
    shortTag: 'Preventive Oral Hygiene',
    category: 'Preventive',
    shortDesc: 'Professional preventive cleaning to remove hardened tartar, plaque biofilm, and surface stains, protecting gums from disease.',
    fullDesc: 'Over time, mineralized dental calculus (tartar) forms in areas toothbrush bristles cannot reach, leading to gum inflammation (gingivitis). Using gentle ultrasonic vibrations and water lavage, scaling safely detaches calculus deposits without harming natural tooth enamel, followed by fine paste polishing for a clean, smooth feel.',
    status: 'Candidate Service (Clinic Confirmation Pending)',
    iconType: 'scaling',
    indications: [
      'Bleeding gums while brushing or flossing',
      'Yellowish or brown deposits visible along the gumline',
      'Persistent breath odor despite daily brushing',
      'Recommended bi-annual preventive dental wellness checkup',
    ],
    whatToExpect: [
      'Periodontal gum tissue health screening and plaque assessment',
      'Piezo-ultrasonic tips gently dislodging hardened tartar with water spray',
      'Manual micro-curettage for fine subgingival detailing if needed',
      'Prophy paste polishing to smooth enamel and buff away food/tea stains',
    ],
    patientTips: [
      'Mild temporary sensitivity to cold water is normal and resolves in 24–48 hours',
      'Use a soft-bristled toothbrush with gentle circular motions',
      'Incorporate daily flossing or interdental brushes to keep contact areas clear',
    ],
    estimatedDuration: '30 to 45 minutes',
  },
  {
    id: 'dental-crowns-and-bridges',
    name: 'Dental Crowns and Fixed Bridges',
    shortTag: 'Prosthodontic Restoration',
    category: 'Prosthodontics',
    shortDesc: 'Custom-crafted ceramic and zirconia caps that restore strength, bite stability, and lifelike aesthetics to weakened or missing teeth.',
    fullDesc: 'Dental crowns provide 360-degree structural reinforcement for teeth that have undergone root canal treatment or sustained significant structural loss. Fixed bridges bridge the space created by one or more missing teeth by anchoring to sound neighboring teeth, restoring balanced mastication and speech clarity.',
    status: 'Candidate Service (Clinic Confirmation Pending)',
    iconType: 'crown',
    indications: [
      'Root canal treated teeth requiring long-term fracture protection',
      'Severely worn, cracked, or heavily filled posterior molars',
      'Cosmetic smile enhancement for discolored or misshapen anterior teeth',
      'Replacement of a missing tooth without removable partial dentures',
    ],
    whatToExpect: [
      'Conservative preparation of the tooth to create space for the restoration',
      'Precision dental impressions and natural shade matching to your smile',
      'Placement of a comfortable temporary crown while custom fabrication proceeds',
      'Definitive bonding and occlusal harmony verification during the final visit',
    ],
    patientTips: [
      'Practice good oral hygiene around the crown margin to protect supporting gums',
      'Avoid crunching on non-food items like pens, bottle caps, or ice',
      'Visit every 6 months for routine margin and bite checkups',
    ],
    estimatedDuration: '2 to 3 appointments over 1 to 2 weeks',
  },
  {
    id: 'impacted-tooth-treatment',
    name: 'Impacted Tooth Treatment',
    shortTag: 'Specialized Eruption Care',
    category: 'Oral Surgery',
    shortDesc: 'Comprehensive clinical evaluation and treatment planning for teeth blocked from emerging normally through the gumline.',
    fullDesc: 'An impacted tooth is one that fails to erupt into its normal functional position within the expected developmental timeframe, often due to physical obstacles, crowding, or abnormal angulation (commonly canines or molars). Dr. Yadav provides thorough diagnostic staging and conservative management plans.',
    status: 'Candidate Service (Clinic Confirmation Pending)',
    iconType: 'impacted',
    indications: [
      'Tooth failing to emerge long after expected eruption age',
      'Localized swelling or tenderness in the gum ridge where a tooth should be',
      'Cystic changes or root resorption spotted on routine panoramic radiographs',
      'Bite irregularities or shifting of adjacent teeth',
    ],
    whatToExpect: [
      'Comprehensive clinical inspection and radiographic localization',
      'Evaluation of neighboring tooth health, root integrity, and bone thickness',
      'Honest discussion of treatment choices: observation, surgical exposure, or removal',
      'Customized treatment pathway tailored to the patient\'s age and oral health',
    ],
    patientTips: [
      'Early radiographic screening helps identify impactions before symptoms worsen',
      'Follow customized post-operative guidance if minor surgical exposure is performed',
      'Maintain regular follow-up visits to monitor developmental progress',
    ],
    estimatedDuration: 'Consultation & imaging: 30 minutes; treatment varies by case',
  },
];
