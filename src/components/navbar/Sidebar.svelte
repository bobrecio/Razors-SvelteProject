<script>
    import navLinks from "../../constants/navLinks";
    import {link} from "svelte-routing";
</script>
<div class="sidebar-container">
    <div class="sidebar">
        <!-- header -->
        <div class="sidebar-header">
            <button class="btn-close">
                <i class="fas fa-window-close"></i>
            </button>
        </div>
        <!-- site logo -->
        <img 
        src="/assets/images/logo.svg" 
        alt="razors logo" 
        class="logo sidebar-logo"/>
        <!-- links -->
        <ul class="sidebar-links">
            {#each navLinks as sideLink}
                <li>
                    <a href={sideLink.url} use:link on:click={()=>{
                        console.log('sidebar closed');
                    }}>{sideLink.text}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>