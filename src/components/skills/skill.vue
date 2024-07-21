<template>
    <!-- #121212 -->
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



                <!-- <span
                    class=" font-sans font-bold text-sm text-white absolute border border-yellow-500 top-[-10px] bg-[#1C1C1C] pl-2 pr-2 left-2">Phone</span>

                <span
                    class=" font-sans text-white tracking-wide border border-yellow-500 pl-2 pr-2 pt-3 pb-2 font-medium text-center">+92
                    342 8999005</span> -->
            


            <div class="fixed top-60 left-[78%] z-50">
                <span
                    class=" font-sans font-bold text-sm text-white absolute border border-yellow-500 top-[-25px] bg-[#1C1C1C] px-5 py-3 rounded left-8">My Skills</span>
                <div class="font-sans font-bold text-sm border-2 border-yellow-500 rounded-sm ">
                    <div class="flex flex-col justify-center space-y-4 mx-6 mb-6 mt-8">
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px] animation">
                            HTML 5</div>
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px]">
                            JS</div>
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px]">
                            CSS</div>
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px]">
                            Tailwind CSS</div>
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px]">
                            VUE JS</div>
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px]">
                            NODE JS</div>
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px]">
                            EXPRESS JS</div>
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px]">
                            MONGO DB</div>
                        <div
                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-sm cursor-pointer text-center hover:translate-x-[20px]">
                            PUG</div>
                    </div>
                </div>
            </div>

            <div>
                <nav>
                    <ul class="flex justify-end items-center p-6 space-x-4">
                        <router-link to="/portfolio">
                            <li :class="getNavClass('portfolio')" @click="setActive('portfolio')">
                                Portfolio
                            </li>
                        </router-link>
                        <router-link to="/myskills">
                            <li :class="getNavClass('skills')" @click="setActive('skills')">
                                My Skills
                            </li>
                        </router-link>
                        <router-link to="" @click="openInNewTab('/resume')">
                            <li
                                class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-lg cursor-pointer">
                                My Resume
                            </li>
                        </router-link>
                    </ul>
                </nav>
            </div>

            <div class="flex flex-col mt-10 ml-12 max-w-2xl">
                <h1 class="text-4xl font-bold">
                    My <span class="text-yellow-500">W</span>ork
                </h1>
                <p class="mt-2 text-lg">A Full-Stack Web Developer</p>
            </div>

            <div class="flex flex-col mt-10 ml-12 max-w-2xl">
                <!-- Project 1 -->
                <div class="flex flex-col p-6 mt-10">
                    <div>
                        <span class="text-3xl font-bold"> Project </span><span class="text-2xl"> : &nbsp Fitness
                            Tracker </span>
                    </div>

                    <div class="tracking-wide text-justify mt-12">
                        A feature-rich fitness tracking application aimed at providing
                        users with an efficient and engaging way to monitor their workouts
                        and progress. The application allows users to log various
                        workouts, track their performance, and visualize their fitness
                        journey over time.
                    </div>

                    <div class="tracking-wide justify-center mt-5 leading-6">
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Frontend
                            Development:</div>
                        Implementing HTML, CSS, JavaScript, and
                        Tailwind CSS to create an intuitive and responsive user interface.
                        The application allows PROFILE I am a skilled Full Stack Developer
                        specializing in HTML, CSS, JavaScript, Vue.js, Node.js,
                        Express.js, Pug, MongoDB, and Tailwind CSS. Known for crafting
                        seamless user experiences and scalable applications, I excel in
                        driving project success through innovation and precision. users to
                        easily log their workouts and visualize their progress using
                        Vue.js for dynamic updates and real-time feedback.
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Backend
                            Development:</div>
                        Utilizing Node.js and Express to build a robust
                        backend that handles user authentication, workout data storage,
                        and API integrations. The backend efficiently manages user data
                        and ensures secure and smooth interactions with the frontend.
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold"> Database
                            Management:</div>
                        Designing and optimizing MongoDB schemas to
                        store detailed workout logs, user profiles, and fitness goals.
                        Ensuring efficient data retrieval and updates, which allow users
                        to track their fitness progress over time.
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Template Engines
                            and Component Libraries:</div>
                        Using Pug to create reusable and dynamic HTML
                        templates, combined with Tailwind CSS for consistent styling. This
                        modular approach enhances the user experience by providing a
                        cohesive and visually appealing layout throughout the application.
                    </div>
                </div>
                <!-- Project 2 -->
                <div class="flex flex-col p-6 mt-20">
                    <div>
                        <span class="text-3xl font-bold"> Project </span><span class="text-2xl"> : &nbsp Travel
                            Planner </span>
                    </div>

                    <div class="tracking-wide text-justify mt-12">
                        An innovative travel planning application designed to streamline trip organization and
                        enhance user experience. This application allows users to efficiently plan their travels by
                        managing schedules, bookings, and activities in one place.
                    </div>

                    <div class="tracking-wide justify-center mt-5 leading-6">
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Frontend
                            Development:</div>
                        Crafted with HTML, CSS, JavaScript, and Tailwind CSS to
                        create a responsive and visually appealing user interface. Vue.js is used for
                        interactive elements, enabling users to drag and drop activities into their travel
                        schedules and view real-time updates.

                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Backend
                            Development:</div>
                        Built using Node.js and Express to handle user
                        authentication, trip data management, and third-party API integrations for booking
                        services. The backend ensures secure and efficient handling of user data and
                        seamless interaction with the frontend.

                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold"> Database
                            Management:</div>
                        Utilizes MongoDB to store user profiles, trip details,
                        booking information, and activity logs. The database schema is designed for optimal
                        performance, allowing users to quickly retrieve and update their travel plans.

                    </div>
                </div>

                <!-- Project 3 -->
                <div class="flex flex-col p-6 mt-20">
                    <div>
                        <span class="text-3xl font-bold"> Project </span><span class="text-2xl"> : &nbsp Online
                            Learning Platform</span>
                    </div>

                    <div class="tracking-wide text-justify mt-5">
                        An advanced online learning platform designed to provide a comprehensive and engaging
                        educational experience. The platform supports interactive course modules, user progress
                        tracking, and efficient content delivery, making it an effective tool for both learners and
                        educators.
                    </div>

                    <div class="tracking-wide justify-center leading-6 mt-12">
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Frontend
                            Development:</div>
                        Developed using HTML, CSS, JavaScript, and
                        Tailwind CSS to create a user-friendly interface. Vue.js is integrated for
                        dynamic content rendering and interactive course modules, enhancing user
                        engagement and learning experience.
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Backend
                            Development:</div>
                        Built with Node.js and Express to handle user
                        authentication, course management, and data storage. RESTful APIs are
                        implemented to manage course enrollments, user progress, and content
                        delivery efficiently.

                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold"> Database
                            Management:</div>
                        Utilizes MongoDB to store course materials, user
                        profiles, quiz results, and learning progress. The database schema is
                        optimized for fast data retrieval and seamless integration with the frontend
                        and backend components.
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Template Engines
                            and Component Libraries:</div>
                        Implements Pug for
                        generating HTML templates, ensuring a consistent layout across different
                        pages. Tailwind CSS is used for styling components, providing a clean and
                        modern design that enhances usability and navigation.

                    </div>
                </div>


                <!-- Project 4 -->
                <div class="flex flex-col p-6 mt-20">
                    <div>
                        <span class="text-3xl font-bold"> Project </span><span class="text-2xl"> : &nbsp Real Estate
                            Marketplace </span>
                    </div>

                    <div class="tracking-wide text-justify mt-5">
                        An innovative real estate marketplace designed to provide users with a comprehensive
                        platform for browsing and managing property listings. The application offers a user-friendly
                        experience for buyers, sellers, and agents to interact and conduct transactions efficiently.
                    </div>

                    <div class="tracking-wide justify-center leading-6 mt-12">
                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Frontend
                            Development:</div>
                        Designed using HTML, CSS, JavaScript, and
                        Tailwind CSS to create a responsive and visually appealing interface. Vue.js is
                        utilized for dynamic property listings, interactive maps, and real-time
                        updates on property availability.

                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Backend
                            Development:</div>
                        Developed with Node.js and Express to manage
                        property listings, user accounts, and transactions. APIs are integrated for
                        property search functionalities, user authentication, and communication
                        between buyers, sellers, and agents.

                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold"> Database
                            Management:</div>
                        Implements MongoDB to store property details,
                        user profiles, transaction history, and listing metadata. The database schema
                        is designed for scalability and performance, supporting efficient search
                        queries and data retrieval.

                        <div class="tracking-wide justify-center text-yellow-500 text-xl font-bold">Template Engines
                            and Component Libraries:</div>
                        Utilizes Pug for generating
                        HTML templates, ensuring consistency in layout and structure across
                        different pages. Tailwind CSS is applied for styling components, creating a
                        seamless browsing experience for users navigating property listings and
                        details.

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: "skills",
        };
    },
    methods: {
        setActive(section) {
            this.active = section;
        },
        getNavClass(section) {
            return [
                "px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 text-white rounded-lg cursor-pointer",
                { "bg-yellow-600": this.active === section },
            ];
        },
        openInNewTab(path) {
            const url = this.$router.resolve({ path }).href;
            window.open(url, "_blank");
            this.setActive("resume");
        },
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
    top: 100%;
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
    top: 150%;
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
    top: 200%;
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
    top: 250%;
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
    top: 300%;
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
    top: 350%;
    left: 92%;
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
    top: 400%;
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
    top: 450%;
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
</style>