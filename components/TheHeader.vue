<template>
  <header
    class="mb-6 flex items-center justify-between bg-amber-300 py-7 px-24 text-zinc-800 shadow-xl shadow-amber-300/5"
  >
    <h1 class="flex items-center gap-2 text-3xl font-bold tracking-tight">
      <Icon name="fa6-solid:book" />
      Bookeree
    </h1>
    <nav>
      <ul class="flex gap-6">
        <li>
          <NavLink to="/books">My Books</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add a Book</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
