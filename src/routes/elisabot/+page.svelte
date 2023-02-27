<script>
    import { enhance } from "$app/forms";
    import "elizabot";
    import ElizaBot from "elizabot";
    import "@picocss/pico"
    let eliza = new ElizaBot();
    let chat = [{ user: "eliza", text: eliza.getInitial() }];
    async function write(message) {
      // TODO: yeet in the new message
    chat.push({user: "you", text: message});
    chat = chat;

      // random delay for writing
      await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
      // TODO: write the text
    chat.push({user: "eliza", text: eliza.transform(message)});
    chat = chat;
      
    }
</script>
  
  
  <svelte:head>
    <link rel="stylesheet" href="/pico.min.css" />
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </svelte:head>
<div class="background">
  <div class="container">
    <h1>ElizaBot</h1>
    <div class="scrollable">
      <!-- TODO: loop over the messages and display them -->4
      {#each chat as message}
      <article>
        <span>
          {message.text}
        </span>
      </article>
      {/each}
      
    </div>
    <form
      method="post"
      use:enhance={({ form, data, action, cancel }) => {
        /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
        cancel(); //don't post anything to server
        const text = data.get("text");
        write(text);
        form.reset;
        // TODO: reset the form using form.reset(s)
      }}
    >
      <div class="input">
        <input type="text" name="text" class="INPUT1"/>
      </div>
      
    </form>
  </div>
</div>
  <style>
    /* .container {
        background-color: grey;
        border-radius: 15px;
        display: flex;
        justify-content: center; 
        height: 750px;
        width: 400px;
    } */
    /* .input {
        text-align: center;
        display: flex;
        justify-content: center;
    
    }
    .INPUT1 {
        text-align: center;
        display: flex;
        justify-content: center;
        border: none;
        border-radius: 3px;
        height: 20px;
        width: 180px;
        font-size: 15px;
        background-color: rgb(255, 255, 255);
        box-shadow: 3px 3px black;
    }
    INPUT:active {
        background-color: lightgoldenrodyellow;
        box-shadow: 0 0 black;
        transform: translate(3px, 3px);
    }

    .background {
        display: flex;
        justify-content: center;
    } */
  </style>
  