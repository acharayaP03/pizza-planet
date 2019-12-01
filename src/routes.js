import Home from './components/Home';
import Menu from './components/Menu';
import Admin from './components/Admin';
import About from './components/About';
import Contact from './components/Contact';
import History from './components/History';
import Delivery from './components/Delivery';
import Ordering from './components/Ordering';


export const routes =[
    {
      path: '/',
      //named routes
      name: 'homeLink',
      components: {
          default: Home,
          'ordering': Ordering,
          'delivery': Delivery,
          'history': History
      }
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin, beforeEnter:(to, from, next) =>{
        alert('This area is for authorised users only, pleae login to contine.');
        next();
      }
    },
    {
      path: '/about',
      component: About, children: [
        {
          path: '/contact',
          name: 'contactLink',
          component: Contact
        },
        {
          path: '/history',
          name: 'historLink',
          component: History
        },
        {
          path: '/delivery',
          name: 'deliveryLink',
          component: Delivery
        },
        {
          path: '/ordering',
          name: 'orderingLink',
          component: Ordering
        }
      ]
    },
    //redirect to the root or 404 if url doesnt match
    {
      path: '*',
      redirect: '/'
    }
  ]