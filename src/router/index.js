import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './../views/HomeView.vue';
import RecipesView from './../views/RecipesView.vue';
import RecipeView from './../views/RecipeView.vue';
import IngredientsView from './../views/IngredientsView.vue';
import IngredientView from './../views/IngredientView.vue';
import LoginView from './../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesView,
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: IngredientsView,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView,
      props: true
    },
    {
      path: '/ingredient/:id',
      name: 'ingredient',
      component: IngredientView,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  ]

});

export default router;