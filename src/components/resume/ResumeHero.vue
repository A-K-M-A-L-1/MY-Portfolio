<template>
    <div class="flex-1 bg-[#121212] h-[100vh] flex items-center justify-center relative">
      <div class="relative bg-[url('./../assets/hero.jpg')] bg-center bg-cover h-[95vh] w-[80vw] rounded-lg">
        <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div class="relative z-20 h-[95vh] w-[80vw] text-white overflow-x-hidden overflow-y-auto">
          <div class="html-skill">HTML 5</div>
          <div class="js-skill">JS</div>
          <div class="css-skill">CSS</div>
          <div class="tailwind-skill">Tailwind CSS</div>
          <div class="vue-skill">VUE JS</div>
          <div class="node-skill">NODE JS</div>
          <div class="express-skill">EXPRESS JS</div>
          <div class="mongo-skill">MONGO DB</div>
          <div class="pug-skill">PUG</div>
  
          <div>
            <nav>
              <ul class="flex justify-end items-center p-6 space-x-4">
                <router-link to="/portfolio">
                  <li :class="getNavClass('portfolio')" @click="setActive('portfolio')">
                    Portfolio
                  </li>
                </router-link>
                <router-link to="/myskills">
                  <li :class="getNavClass('skills')" @click="setActive('skills')">My Skills</li>
                </router-link>
                <router-link to="" @click="openInNewTab('/resume')">
                  <li :class="getNavClass('resume')" @click="setActive('resume')">
                    My Resume
                  </li>
                </router-link>
              </ul>
            </nav>
          </div>
  
          <!-- PDF -->
          <div ref="pdfContainer" class="pdf-container flex flex-col mx-auto max-w-3xl space-y-10">
            <!-- PDF.js will render the PDF here -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getDocument } from 'pdfjs-dist/webpack';
  
  export default {
    data() {
      return {
        active: 'resume',
      };
    },
    mounted() {
        const url = '/resume.pdf'; // Path to your PDF file in the public folder
    const container = this.$refs.pdfContainer;

    // Configure PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/[VERSION]/pdf.worker.js'; // Replace [VERSION] with the version you're using

    // Load PDF document
    getDocument(url).promise.then(pdf => {
      const renderPage = (pageNum) => {
        pdf.getPage(pageNum).then(page => {
          const scale = 3; // Adjust scale for better quality
          const viewport = page.getViewport({ scale });

          // Create a canvas to render the page
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          container.appendChild(canvas);

          const context = canvas.getContext('2d');

          // Render PDF page into canvas context
          const renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
        });
      };

      // Render first two pages (adjust if needed)
      renderPage(1);
      renderPage(2);
    }).catch(error => {
      console.error('Error loading PDF:', error);
    });
    },
    methods: {
      setActive(section) {
        this.active = section;
      },
      getNavClass(section) {
        return [
          'px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-lg cursor-pointer',
          { 'bg-yellow-600': this.active === section },
        ];
      },
      openInNewTab(path) {
        const url = this.$router.resolve({ path }).href;
        window.open(url, '_blank');
        this.setActive('resume');
      }
    },
  };
  </script>
  
  <style scoped>
@keyframes float {
    0% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(10px, -10px);
    }

    100% {
        transform: translate(0, 0);
    }
}

.html-skill {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 56px;
    height: 56px;
    padding-top: 11px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;
    font: bolder;
}

.css-skill {
    position: absolute;
    top: 10%;
    left: 10%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 56px;
    height: 56px;
    padding-top: 17px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;

}

.js-skill {
    position: absolute;
    top: 18%;
    left: 80%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 56px;
    height: 56px;
    padding-top: 17px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;
}

.tailwind-skill {
    position: absolute;
    top: 80%;
    left: 64%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 70px;
    height: 70px;
    padding-top: 17px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;
}

.vue-skill {
    position: absolute;
    top: 45%;
    left: 80%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 56px;
    height: 56px;
    padding-top: 17px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;
}

.node-skill {
    position: absolute;
    top: 38%;
    left: 20%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 56px;
    height: 56px;
    padding-top: 11px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;
}

.express-skill {
    position: absolute;
    top: 90%;
    left: 89%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 70px;
    height: 70px;
    padding-top: 19px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;
}

.mongo-skill {
    position: absolute;
    top: 90%;
    left: 9%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 70px;
    height: 70px;
    padding-top: 17px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;
}

.pug-skill {
    position: absolute;
    top: 20%;
    left: 60%;
    background-color: #facc15;
    box-shadow: 0 4px 8px rgb(245, 212, 83);
    border: 2px solid #facc15;
    border-radius: 50%;
    color: black;
    font-size: 0.875rem;
    text-align: center;
    width: 56px;
    height: 56px;
    padding-top: 17px;
    opacity: 0.7;
    cursor: pointer;
    animation: float 5s ease-in-out infinite;
    z-index: -10;
}
  .pdf-container {
    /* Additional styling for the PDF container if needed */
  }
  </style>
  