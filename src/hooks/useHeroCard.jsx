import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Alert } from '../components/Alert/Alert';
import { HeroAdd, heroDelete } from '../state/action-creators/heroes';

export const useHeroCard = (props) => {
  const { name } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const { heroTeam } = useSelector((state) => state.heroes);

  const heroids = heroTeam.map((hero) => hero.id);

  //Validation Good, Bad, Neutral heroes
  const countBy = (arr, prop) =>
    arr.reduce(
      (prev, curr) => (
        // eslint-disable-next-line no-sequences
        (prev[curr.biography[prop]] = ++prev[curr.biography[prop]] || 1), prev
      ),
      {}
    );

  let totalHeroes = 0;
  let good = 0;
  let bad = 0;
  let neutral = 0;

  if (heroTeam.length > 0) {
    const alignment = countBy(heroTeam, 'alignment');

    if (alignment.good) {
      good = alignment.good;
    }
    if (alignment.bad) {
      bad = alignment.bad;
    }
    if (alignment.neutral) {
      neutral = alignment.neutral;
    }
    totalHeroes = good + neutral + bad;
  }

  const handleAddHero = ({ id, biography }) => {
    const orientation = biography.alignment;
    const left = 5 - totalHeroes;
    if (!heroids.includes(id)) {
      if (totalHeroes <= 5) {
        // 6 Heroes max
        if (orientation === 'bad') {
          // 3 Bad Heroes max
          if (bad <= 2) {
            dispatch(HeroAdd(props));

            if (left === 0) {
              Alert(
                `${name} added to your team`,
                `Your team is complete`,
                'success'
              );
            } else {
              Alert(
                `${name} added to your team`,
                `You left to add ${left} hero to complete your team`,
                'success'
              );
            }
          } else {
            Alert(
              'BAD orientation heroes Max',
              'You have reached the maximum number of BAD orientation hero allowed on your team - (MAX: 3 BAD ORIENTATION HEROES)',
              'warning'
            );
          }
        }

        if (orientation === 'good') {
          // 3 Good Heroes max
          if (good <= 2) {
            dispatch(HeroAdd(props));
            if (left === 0) {
              Alert(
                `${name} added to your team`,
                `Your team is complete`,
                'success'
              );
            } else {
              Alert(
                `${name} added to your team`,
                `You left to add ${left} hero to complete your team`,
                'success'
              );
            }
          } else {
            Alert(
              'GOOD orientation heroes Max',
              'You have reached the maximum number of GOOD orientation hero allowed on your team - (MAX: 3 GOOD ORIENTATION HEROES)',
              'warning'
            );
          }
        }

        if (orientation === 'neutral') {
          dispatch(HeroAdd(props));
          if (left === 0) {
            Alert(
              `${name} added to your team`,
              `Your team is complete`,
              'success'
            );
          } else {
            Alert(
              `${name} added to your team`,
              `You left to add ${left} hero to complete your team`,
              'success'
            );
          }
        }
      } else {
        Alert(
          'Team complete',
          'You have reached the maximum number of heroes allowed on your team. If you want to add another hero you have to delete one first - (MAX: 6 HEROES)',
          'warning'
        );
      }
    } else {
      Alert(
        `${name} is already on your team`,
        'Please select another hero',
        'warning'
      );
    }
  };

  const preHandleAddHero = () => handleAddHero(props);

  const handleSeeMore = (props) => {
    history.push({ pathname: `/hero/${props.id}`, state: props });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `This will delete ${name} from your team!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',

      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(heroDelete(id));
        Swal.fire(
          'Deleted!',
          'Your hero has been deleted from your team.',
          'success'
        );
      }
    });
  };

  return { handleSeeMore, handleDelete, preHandleAddHero };
};
