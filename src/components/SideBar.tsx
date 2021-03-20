import '../styles/sidebar.scss'
import { Button } from './Button'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface props{
  genres: GenreResponseProps[],
  onClickButton: (arg0: number) => void,
  selectedGenreIdProp: number,
}

export function SideBar(props: props) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClickButton(genre.id)}
            selected={props.selectedGenreIdProp === genre.id}
          />
        ))}
      </div>

    </nav>

  );
}