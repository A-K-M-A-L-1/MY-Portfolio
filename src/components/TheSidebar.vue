<template>

    <div class="w-52 bg-[#1C1C1C] h-[100vh] flex justify-center">
        <div class="flex pt-6 flex-col p-12 justify-evenly space-y-12">

            <span class="flex justify-center">
                <img src="../assets/meee.png" alt=""
                    class="rounded-full w-[130px] h-[125px] shadow-lg duration-300 cursor-pointer">
            </span>
            <!-- details -->
            <div class="flex flex-col justify-between space-y-6 items-stretch">
                <!-- Name -->
                <div
                    class="flex flex-col relative shadow-[#121212] shadow-lg cursor-pointer">
                    <span
                        class=" font-sans font-bold text-sm text-white absolute border border-yellow-500 top-[-10px] bg-[#1C1C1C] pl-2 pr-2 left-2">Name</span>

                    <span
                        class=" font-sans text-white tracking-tight border border-yellow-500 pl-2 pr-2 pt-4 pb-2 font-medium text-center">AKMAL
                        FARAZ KHAN</span>
                </div>

                <!-- description -->
                <div
                    class="flex flex-col relative  rounded-md text-justify tracking-tight text-sm text-white p-3 cursor-pointer shadow-[0_4px_8px_rgb(245,212,83)]">
                    <p>
                        I am a skilled Full Stack Web Developer specializing in HTML, CSS, JavaScript, Vue.js, Node.js,
                        Express.js, Pug, MongoDB, and Tailwind CSS. Known for crafting seamless user experiences and
                        scalable applications, I excel in driving project success through innovation and precision.
                    </p>
                </div>

                <!-- Email -->
                <div
                    class="flex flex-col relative shadow-[#121212] shadow-lg duration-300 cursor-pointer">
                    <span
                        class=" font-sans font-bold text-sm text-white absolute border border-yellow-500 top-[-10px] bg-[#1C1C1C] pl-2 pr-2 left-2">Email</span>

                    <span
                        class=" font-sans text-white tracking-tighter border border-yellow-500 pl-2 pr-2 pt-3 pb-2 font-medium text-center">aqmalfaraz@gmail.com</span>
                </div>

                <!-- Phone -->
                <div
                    class="flex flex-col relative shadow-[#121212] shadow-lg duration-300 cursor-pointer">
                    <span
                        class=" font-sans font-bold text-sm text-white absolute border border-yellow-500 top-[-10px] bg-[#1C1C1C] pl-2 pr-2 left-2">Phone</span>

                    <span
                        class=" font-sans text-white tracking-wide border border-yellow-500 pl-2 pr-2 pt-3 pb-2 font-medium text-center">+92
                        342 8999005</span>
                </div>
                <!-- Social Media -->
                <div
                    class="flex flex-col relative duration-300 cursor-pointer shadow-[#121212] shadow-lg">
                    <span
                        class=" font-sans font-bold text-sm text-white absolute border border-yellow-500 top-[-10px] bg-[#1C1C1C] pl-2 pr-2 left-2">Contact
                        Me
                    </span>

                    <span class="flex justify-around items-center pl-2 pr-2 pt-5 pb-2 border border-yellow-500 ">
                        <span class="hover:bg-gradient-to-r from-yellow-300  rounded-full w-10 p-1"><a href=""
                                target="_blank"><img src="./../assets/facebook.png" class="w-8 cursor-pointer"
                                    alt=""></a>
                        </span>
                        <span class="hover:bg-gradient-to-r from-yellow-300 rounded-full p-2"><a href=""
                                target="_blank"><img src="./../assets/gmail.png" class="w-7 cursor-pointer" alt=""></a>
                        </span>
                        <span class="hover:bg-gradient-to-r from-yellow-300  rounded-full p-2"><a
                                href="https://linkedin.com/in/akmal-faraz-591756319" target="_blank"><img
                                    src="./../assets/linkedin.png" class="w-7 cursor-pointer" alt=""></a>
                        </span>

                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>