import Taiwo from '../../assets/images/taiwo.png';

const Image = ({id, animate}) => {
  return (
    <div
      onMouseEnter={() => animate.play()}
      onMouseLeave={() => animate.reverse()}
      className="lg:p-8 h-2/5 flex items-end justify-center relative animate__animated animate__zoomInRight animate__slower">
      <div
        id={id}
        className="border-4 border-dashed rounded-2xl border-lightMode-100 w-52 h-52 lg:w-64 lg:h-64 will-change-transform absolute bottom-4 lg:bottom-12 opacity-0"
      />
      <img
        src={Taiwo}
        className="image rounded-full border-lightMode-100 z-10 shadow-xl border-b-8 w-64 lg:w-80 hover:transition-all hover:ease-in-out hover:duration-300 transition-all ease-in-out duration-300"
        alt="Taiwo Jazz"
      />
    </div>
  );
};

export default Image;
