# lugx_clone
lugx_clone

#manchester.ac.uk tailwindcss cloning
```html
<main>
  <header class="flex flex-col lg:flex-row relative m-[25px]">
    <a href="#">
      <img class="w-[206px] h-auto border" src="https://assets.manchester.ac.uk/corporate/images/design/logo-university-of-manchester.png" alt="logo">
    </a>
    <input type="checkbox"  id="navbar-state" class="peer hidden">
    <div class="absolute right-0 top-5 flex items-center gap-6  justify-end md:border md:justify rounded-2xl md:py-1 lg:py-0 md:cursor-pointer">
      <img class="w-[25%] h-[30%] md:w-[20%] cursor-pointer" src="https://assets.manchester.ac.uk/corporate/images/design/icon-search-mobile.png" alt="search">
      <span class="hidden md:block">Search</span>
        <label for="navbar-state">
        <img class="w-[25px] h-[20px] md:hidden cursor-pointer" src="https://assets.manchester.ac.uk/corporate/images/design/icon-menu.gif" alt="hamburger-menu">
      </label>
    </div>
    <nav class="peer-checked:max-h-full max-h-0 overflow-hidden md:max-h-full md:w-fit lg:w-fit md:mx-auto md:border">
      <ul class="flex flex-col md:flex-row md:gap-9 md:text-2xl">
        <li>
            <a href="#">Study</a>
        </li>
        <li>
            <a href="#">Research</a>
        </li>
          <li>
            <a href="#">Collaborate</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
          <li>
            <a href="#">Connect</a>
        </li>
      </ul>
    </nav>
  </header>
</main>
```
