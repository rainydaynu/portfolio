<template>
    <div>
        {{ $page }}
    </div>
</template>


<!-- access local data  -->
<page-query>
    query {
        allMyData {
          edges {
            node {
              title
              customField
            }
          }
        }
      }
</page-query>
