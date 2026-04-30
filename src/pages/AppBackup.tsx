// import Header from "./components/Header";
// import Button from "./components/ui/Button";
// import { Collapse } from "./components/Collapse";
// import SpeakerCard from "./components/SpeakerCard";
// import {Card} from "./components/ui/Card"; 


// function App () {
//     const speakers = [
//         {
//             name: "Dery Agung Triyadi",
//             role: "Aws Indonesia",
//             imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
            
//         },
//         {
//             name : "Sowam Habibi",
//             role : "Google Indonesia",
//             imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",

//         },
//         {
//             name : "Lhuqita Fazry",
//             role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
//             imageUrl : "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
//         },
//     ];

//     const collapseItems =[
//         {
//             title: "Apa itu Invofest?",
//             description : 
//             "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ",
//         },
//         {
//             title:" Kapan dan di mana Invofest akan diselenggarakan?",
//             description:
//             "Invofest akan diselenggarakan pada tanggal 15-17 November di jakarta Convention Center (JCC), Jakarta, Indonesia",

//         },
//         {
//             title: "Siapa saja yang dapat mengikuti Invofest?",
//             description:
//             "Invofest terbuka untuk semua kalangan , terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi dan inovasi. Acara ini dirancang untuk memberikan inspirasi dan pengetahuan kepada semua peserta, tanpa memandang latar belakang  atau tingkat keahlian.",

//         },
//     ];

//     const cardItems = [
//         {
//             title : "IT Seminar",
//             description:
//             "Seminar nasional ini membahas 'Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan KOmpetitif' untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
//         },
//         {
//             title: "IT Talkshow",
//             description:
//             "Kompetisi 'From Creation to Innovation' mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
//         },
//         {
//             title: "IT Competition", 
//             description: "Kompetisi 'From Creation to Innovation' mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.", 
//         },
//         {
//             title:"IT Workshop",
//             description:
//             "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
//         },
//     ];

//     return (
//         <>
//         <Header/>

//         <div className="max-w-7xl mx-auto px-10">
//             <section
//             id="hero"
//             className="py-10 flex gap-10 justify-between items-center"
//             >
//                 <div className="w-2/3 flex flex-col gap-6">
//                     <img src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
//                     alt=""
//                     className="w-96"
//                     />
//                     <p>
//                         Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan meberdayakan generasi muda Indonesia dalam menghadapi era digital. 
//                         Dengan mengusung tema "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow".
//                     </p>

//                     <div className="flex gap-4">
//                         <a href="#cards">
//                             <Button label="Info Selengkapnya" variant="primary" />
//                         </a>
//                         <Button label="Hubungi Panitia" variant="outline" />
//                     </div>
//                 </div>

//                 <div className="w-1/3">
//                     <img 
//                     src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
//                     alt=""
//                     />
//                 </div>
//             </section>

//             <section id="speaker" className="py-24">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
//                     {speakers.map((speaker,index) => (
//                         <SpeakerCard
//                             key={index}
//                             name={speaker.name}
//                             role={speaker.role}
//                             imageUrl={speaker.imageUrl}
//                         />
//                     ))}
//                 </div>
//             </section>

//             <section
//                 id="cards"
//                 className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-6"
//                 >
//                 {cardItems.map((item,index) => (
//                     <Card key={index} className="w-full">
//                         <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
//                         <p>{item.description}</p>
//                         <Button 
//                         label="Info Selengkapnya"
//                         variant="primary"
//                         className="mt-4"
//                         />
//                     </Card>
//                 ))}
//             </section>

//             <section id="collapse" className="min-h-screen py-24 flex flex-col gap-2 px-6">
//                 {collapseItems.map((item,index) => (
//                     <Collapse
//                         key={index}
//                         title={item.title}
//                         description={item.description}
//                         />
//                 ))}
//             </section>
//         </div>
//         </>
//     );
// }

// export default App;