<% include partials/head %>

  <h1>Blog Home</h1>

  <section>

    <% for(var i = 0; i < posts.length; i++) { 
      if (posts[i].id != "123")
      { %>
    <article>
      <h2><%= posts[i].title %></h2>
      <div>By <%= posts[i].author.fName %> </div>
      <div>
        <%- posts[i].content %>
      </div>
    </article>
    <% }
  } %>

  </section>



<% include partials/foot %>