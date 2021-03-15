## React Test Site

To explore the live site visit [https://upbeat-banach-1cbf9a.netlify.app/](https://upbeat-banach-1cbf9a.netlify.app/).

#### What I've Done

- I’ve split the page into two functional components - Banner and ProgressBar.
- Data fetching is done in the IndexPage with the return values being stored in state, and passed down to the Banner and ProgressBar via props.
- The ProgressBar also receives an isLoading boolean via props, which will result in the display rendering a loading spinner until the data has been fetched.
- To help maintain the desired aspect ratio on larger viewports I’ve added a Layout component that simply renders a grey header and footer.
- To handle the server error I’ve instantiated the user state with initialState values which are then spread into the setUser function. This means that when an error occurs the components will still be rendered but they’ll just use the values that have been defined in initialState.
