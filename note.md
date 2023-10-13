

API directory is for sending data to database only, don't use it to fetch data

Before Next.js:12.0
    fetching data is from Controller directory using:
        getstaticProps()
        getServerSideProps()
        getStaticPaths()
    and any server-side operation is from Controller directory as well.

After Next.js:13.0
    API calls, Fetching & server-side operation can be done in the page file itself
    This new paradign revolve around CACHING
    But API calls need some work around to be effective (they are updating the framework)


