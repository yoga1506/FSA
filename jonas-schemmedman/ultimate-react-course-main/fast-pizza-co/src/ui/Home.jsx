import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  return (
    <div className="my-10 px-4 py-16 text-center sm:my-16">
      <h1 className="mb-4 text-center text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
      <Button>Start Ordering</Button>
    </div>
  );
}

export default Home;
