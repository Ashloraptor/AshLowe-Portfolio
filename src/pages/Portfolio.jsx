import React from 'react';

const projects = [
  {
    id: 1,
    title: "e-commerce-connect Repo",
    description: "Object-Relational-Mapping",
    repoLink: "https://github.com/Ashloraptor/e-commerce-connect",
    deployedLink: "https://drive.google.com/file/d/1P34SMvfi91am0Cc3l_IqjNe0vbM8KsJ8/view",
    screenshot: "https://github.com/Ashloraptor/e-commerce-connect/assets/148083732/b7372a61-f1c6-4175-90a2-175f2bec369f",
  },
  {
    id: 2,
    title: "Employee Tracker",
    description: "SQL",
    repoLink: "https://github.com/Ashloraptor/Employee-Tracker",
    deployedLink: "https://drive.google.com/file/d/1EDjK2w3_8LLa2TSpbgfvpuj_030tdmBu/view",
    screenshot: "https://github.com/Ashloraptor/Employee-Tracker/assets/148083732/4c688c97-4c60-4697-9dd6-600308380a74",
  },
  {
    id: 3,
    title: "AshLowe-Portfolio",
    description: "React",
    repoLink: "https://github.com/Ashloraptor/AshLowe-Portfolio",
    deployedLink: "https://github.com/Ashloraptor/AshLowe-Portfolio",
    screenshot: "https://github.com/Ashloraptor/AshLowe-Portfolio/assets/148083732/babed1d8-48e5-4c54-8503-166c0ac1304d",

  },
  {
    id: 4,
    title: "Whether the Weather be Weathering",
    description: "Server-side APIs",
    repoLink: "https://github.com/Ashloraptor/Whether_the_Weather_be_Weathering",
    deployedLink: "https://ashloraptor.github.io/Whether_the_Weather_be_Weathering/",
    screenshot: "https://github.com/Ashloraptor/Whether_the_Weather_be_Weathering/assets/148083732/d41973ac-a2f5-4580-9461-2610f14ddaeb",
  },
  {
    id: 5,
    title: "Compendium 1.0",
    description: "NoSQL",
    repoLink: "https://github.com/Ashloraptor/Compendium",
    deployedLink: "https://compendium-256a42904ce0.herokuapp.com/",
    screenshot: "https://github.com/Ashloraptor/Compendium/assets/148083732/7706c685-94b1-4a44-b985-fe68cc91024f",
  },
  {
    id: 6,
    title: "Bunny-foot Post",
    description: "NoSQL",
    repoLink: "https://github.com/Ashloraptor/Bunnyfoot-Post",
    deployedLink: "https://drive.google.com/file/d/15rByjqyKtyHeOw2i6kUZA99-hGm0Ni3Z/view",
    screenshot: "https://github.com/Ashloraptor/Bunnyfoot-Post/assets/148083732/0e9395bd-6bb5-4293-9171-08aa633fb9fc"
  }
];



// export default function Portfolio() {
//   return (
//     <div className="container pt-4">
//       <section className="features-icons bg-light text-center m-4">
//         <div className="container">
//           <div className="row p-2">
//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-window m-auto text-primary" />
//                 </div>
//                 <h3>Object-Relational-Mapping</h3>
//                 <a href="https://github.com/Ashloraptor/e-commerce-connect" className="lead mb-0">
//                   e-commerce-connect Repo
//                 </a>
//                 <br />
//                 <a href="https://drive.google.com/file/d/1P34SMvfi91am0Cc3l_IqjNe0vbM8KsJ8/view" className="lead mb-0">e-commerce-connect Demo</a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-layers m-auto text-primary" />
//                 </div>
//                 <h3 >SQL</h3>
//                 <a href="https://github.com/Ashloraptor/Employee-Tracker" className="lead mb-0">
//                   Employee Tracker Repo
//                 </a>
//                 <br />
//                 <a href="https://drive.google.com/file/d/1EDjK2w3_8LLa2TSpbgfvpuj_030tdmBu/view" className="lead mb-0">Employee Tracker Demo</a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-terminal m-auto text-primary" />
//                 </div>
//                 <h3>React</h3>
//                 <a href="https://github.com/Ashloraptor/AshLowe-Portfolio" className="lead mb-0">
//                   AshLowe-Portfolio
//                 </a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-layers m-auto text-primary" />
//                 </div>
//                 <h3 >Server-Side APIs</h3>
//                 <a href="https://github.com/Ashloraptor/Whether_the_Weather_be_Weathering" className="lead mb-0">
//                   Whether the Weather be Weathering Repo
//                 </a>
//                 <br />
//                 <a href="https://ashloraptor.github.io/Whether_the_Weather_be_Weathering/" className="lead mb-0">Whether the Weather be Weathering</a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-layers m-auto text-primary" />
//                 </div>
//                 <h3 >NoSQL</h3>
//                 <a href="https://github.com/Ashloraptor/Compendium" className="lead mb-0">
//                   Compendium 1.0 Repo
//                 </a>
//                 <br />
//                 <a href="https://compendium-256a42904ce0.herokuapp.com/" className="lead mb-0">Compendium 1.0 Link</a>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//                 <div className="features-icons-icon d-flex">
//                   <i className="bi-layers m-auto text-primary" />
//                 </div>
//                 <h3 >NoSQL</h3>
//                 <a href="https://github.com/Ashloraptor/Bunnyfoot-Post" className="lead mb-0">
//                   Bunnyfoot-Post Repo
//                 </a>
//                 <br />
//                 <a href="https://drive.google.com/file/d/15rByjqyKtyHeOw2i6kUZA99-hGm0Ni3Z/view" className="lead mb-0">Bunnyfoot-Post Demo</a>
//               </div>
//             </div>



//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


function Portfolio() {
  return (
    <div className="container pt-4 ">



      {/* <div className="project-list"> */}

      <div className="container ">

        {projects.map(project => (

          <section className="features-icons bg-light text-center m-4">
            <div className="row p-2">
              <div className="col-lg-4 mx-auto">
                <div className="features-icons-item mx-auto mb-5 mb-lg-3">

                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>

                  <div className="project" key={project.id}>
                    <img src={project.screenshot} width="128"></img>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.repoLink}>Github Repo</a>
                    <br />
                    <a href={project.deployedLink}>Deployed Link/Demo</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </section>

        ))}
        {/* </div> */}


      </div>
      {/* </section> */}
    </div>
  );
}

export default Portfolio;