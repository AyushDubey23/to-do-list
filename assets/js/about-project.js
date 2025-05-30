
aboutProject.onclick = () => {
    var aboutProjectSection = document.createElement("div");
    pageBody[0].appendChild(aboutProjectSection);
    aboutProjectSection.setAttribute("id", "about_project_section");
    aboutProjectSection.setAttribute("class", "modal_bg");
    aboutProjectSection.innerHTML = `
        <div class="modal_container">
            <header class="modal_header">
                <b>About project</b>
                <i class="close_btn">&#xe8bb;</i>
            </header>
            <div class="line_dividerX"></div>
<main class="modal_body">
    <svg width="213" height="37" id="logo" viewBox="0 0 213 37" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
    <p>
        <strong>Project by Ayush Dubey</strong><br>
        <em>MMMUT Gorakhpur</em>
        <br><br>
        <span style="font-weight: bold; background-color: yellow; color: black; padding: 5px 10px; border-radius: 5px;">Fill this form to showcase my userbase:</span> 
        <a href="https://forms.gle/xTgR9x5cXK1qjdGp8" target="_blank" style="font-weight: bold; color: red; text-decoration: none; background-color: yellow; padding: 5px 10px; border-radius: 5px;">form</a>
        <br><br>
        This to-do list app lets you create, categorize, and manage tasks with ease. Everything is saved in your browser’s local storage — reload or refresh, your data stays right here.
        <br><br>
        For a smoother workflow, use a browser extension to set this as your new tab page. Boom — instant productivity dashboard.
        <br><br>
        ⚠️ Heads-up: Clearing browser data will also clear your saved tasks.
        <br><br>
        🔗 <a href="https://github.com/AyushDubey23" target="_blank">GitHub</a> |
        <a href="https://www.linkedin.com/in/ayush-dubey-508196331/" target="_blank">LinkedIn</a> |
        📧 <a href="mailto:ayushdubey3740@gmail.com">ayushdubey3740@gmail.com</a>
    </p>
</main>

            <div class="line_dividerX"></div>
            <footer class="form_footer" id="about_project_footer">
                <p id="last_update"></p>
                <a href="https://github.com/AyushDubey23" target="_blank" rel="noopener noreferrer">Visit Github for more info.</a>
            </footer>
        </div>
    `;
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
    });
    document.querySelector("#last_update").innerHTML = formattedDate;
    

    var logo = document.getElementById("logo");

    closeMenu("about_project_section");

    function dynamicLogo(color) {
        logo.innerHTML = `
            <path d="M25.125 7.125H15.4688V36H9.89062V7.125H0.257812V2.39062H25.125V7.125ZM35.3906 36.5625C31.6875 36.5625 28.7266 35.4453 
            26.5078 33.2109C24.3047 30.9609 23.2031 27.9844 23.2031 24.2812C23.2031 20.25 24.3516 17.1016 26.6484 14.8359C28.9609 12.5703 32.0703 
            11.4375 35.9766 11.4375C39.7266 11.4375 42.6484 12.5391 44.7422 14.7422C46.8359 16.9453 47.8828 20 47.8828 23.9062C47.8828 27.7344 46.75 
            30.8047 44.4844 33.1172C42.2344 35.4141 39.2031 36.5625 35.3906 36.5625ZM35.6484 15.7734C33.5234 15.7734 31.8438 16.5156 30.6094 18C29.375 
            19.4844 28.7578 21.5312 28.7578 24.1406C28.7578 26.6562 29.3828 28.6406 30.6328 30.0938C31.8828 31.5312 33.5547 32.25 35.6484 
            32.25C37.7891 32.25 39.4297 31.5391 40.5703 30.1172C41.7266 28.6953 42.3047 26.6719 42.3047 24.0469C42.3047 21.4062 41.7266 19.3672 
            40.5703 17.9297C39.4297 16.4922 37.7891 15.7734 35.6484 15.7734ZM67.2656 36V2.39062H76.9688C89.3594 2.39062 95.5547 7.85156 95.5547 
            18.7734C95.5547 23.9609 93.8359 28.1328 90.3984 31.2891C86.9609 34.4297 82.3516 36 76.5703 36H67.2656ZM72.8203 
            7.125V31.2891H77.2734C81.1953 31.2891 84.2422 30.2109 86.4141 28.0547C88.6016 25.8984 89.6953 22.8516 89.6953 18.9141C89.6953 11.0547 
            85.625 7.125 77.4844 7.125H72.8203ZM111.75 36.5625C108.047 36.5625 105.086 35.4453 102.867 33.2109C100.664 30.9609 99.5625 27.9844 
            99.5625 24.2812C99.5625 20.25 100.711 17.1016 103.008 14.8359C105.32 12.5703 108.43 11.4375 112.336 11.4375C116.086 11.4375 119.008 
            12.5391 121.102 14.7422C123.195 16.9453 124.242 20 124.242 23.9062C124.242 27.7344 123.109 30.8047 120.844 33.1172C118.594 35.4141 
            115.562 36.5625 111.75 36.5625ZM112.008 15.7734C109.883 15.7734 108.203 16.5156 106.969 18C105.734 19.4844 105.117 21.5312 105.117 
            24.1406C105.117 26.6562 105.742 28.6406 106.992 30.0938C108.242 31.5312 109.914 32.25 112.008 32.25C114.148 32.25 115.789 31.5391 
            116.93 30.1172C118.086 28.6953 118.664 26.6719 118.664 24.0469C118.664 21.4062 118.086 19.3672 116.93 17.9297C115.789 16.4922 114.148 
            15.7734 112.008 15.7734ZM162.234 36H143.625V2.39062H149.203V31.2891H162.234V36ZM169.242 6.96094C168.352 6.96094 167.586 6.67188 
            166.945 6.09375C166.32 5.51562 166.008 4.78125 166.008 3.89062C166.008 3 166.32 2.25781 166.945 1.66406C167.586 1.07031 168.352 
            0.773438 169.242 0.773438C170.164 0.773438 170.945 1.07031 171.586 1.66406C172.227 2.25781 172.547 3 172.547 3.89062C172.547 4.73438 
            172.227 5.46094 171.586 6.07031C170.945 6.66406 170.164 6.96094 169.242 6.96094ZM171.938 36H166.5V12H171.938V36ZM177.562 
            35.25V30.2109C179.594 31.7578 181.836 32.5312 184.289 32.5312C187.57 32.5312 189.211 31.5625 189.211 29.625C189.211 29.0781 189.07 
            28.6172 188.789 28.2422C188.508 27.8516 188.125 27.5078 187.641 27.2109C187.172 26.9141 186.609 26.6484 185.953 26.4141C185.312 
            26.1797 184.594 25.9141 183.797 25.6172C182.812 25.2266 181.922 24.8125 181.125 24.375C180.344 23.9375 179.688 23.4453 179.156 
            22.8984C178.641 22.3359 178.25 21.7031 177.984 21C177.719 20.2969 177.586 19.4766 177.586 18.5391C177.586 17.3828 177.859 16.3672 
            178.406 15.4922C178.953 14.6016 179.688 13.8594 180.609 13.2656C181.531 12.6562 182.578 12.2031 183.75 11.9062C184.922 11.5938 186.133 
            11.4375 187.383 11.4375C189.602 11.4375 191.586 11.7734 193.336 12.4453V17.2031C191.648 16.0469 189.711 15.4688 187.523 15.4688C186.836 
            15.4688 186.211 15.5391 185.648 15.6797C185.102 15.8203 184.633 16.0156 184.242 16.2656C183.852 16.5156 183.547 16.8203 183.328 
            17.1797C183.109 17.5234 183 17.9062 183 18.3281C183 18.8438 183.109 19.2812 183.328 19.6406C183.547 20 183.867 20.3203 184.289 
            20.6016C184.727 20.8672 185.242 21.1172 185.836 21.3516C186.445 21.5703 187.141 21.8125 187.922 22.0781C188.953 22.5 189.875 22.9297 
            190.688 23.3672C191.516 23.8047 192.219 24.3047 192.797 24.8672C193.375 25.4141 193.82 26.0547 194.133 26.7891C194.445 27.5078 194.602 
            28.3672 194.602 29.3672C194.602 30.5859 194.32 31.6484 193.758 32.5547C193.195 33.4609 192.445 34.2109 191.508 34.8047C190.57 35.3984 
            189.484 35.8359 188.25 36.1172C187.031 36.4141 185.742 36.5625 184.383 36.5625C181.758 36.5625 179.484 36.125 177.562 35.25ZM212.438 
            35.7422C211.375 36.2734 209.977 36.5391 208.242 36.5391C203.586 36.5391 201.258 34.3047 201.258 29.8359V16.2656H197.25V12H201.258V6.44531L206.695 
            4.89844V12H212.438V16.2656H206.695V28.2656C206.695 29.6875 206.953 30.7031 207.469 31.3125C207.984 31.9219 208.844 32.2266 210.047 
            32.2266C210.969 32.2266 211.766 31.9609 212.438 31.4297V35.7422Z" fill="${color}"/>
            <defs>
                <linearGradient id="paint0_linear_179_2" x1="59.4688" y1="4.38281" x2="62.7124" y2="37.6935" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#006880"/>
                    <stop offset="1" stop-color="#005366"/>
                </linearGradient>
            </defs>`;
    }

    if (JSON.parse(pageHtml[0].getAttribute("darkmode")) === true) {
        dynamicLogo("var(--text)");
    } else {
        dynamicLogo("url(#paint0_linear_179_2)");
    }
};
