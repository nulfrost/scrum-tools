import { Link } from "react-router";

export default function Index() {
  return (
    <>
      <section id="intro">
        <p className="text-gray-500 mb-10">
          Welcome to the scrum.tools website! Below you&apos;ll find a suite of
          tools for your next scrum ceremonies.
        </p>
      </section>
      <section id="tools" className="flex gap-4">
        <div className="w-max border border-gray-300 p-4 rounded-md">
          <h2 className="font-bold text-xl mb-2">Sprint Retrospective</h2>
          <p className="text-gray-500 mb-4">
            Run a multiplayer sprint retrospective where participants can
            interact in real-time.
          </p>
          <Link
            to="/retro/room/some-id"
            className="bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 duration-150 inline-block w-full text-center"
          >
            create new retrospective
          </Link>
        </div>
        <div className="w-max border border-gray-300 p-4 rounded-md">
          <h2 className="font-bold text-xl mb-2">Sprint Retrospective</h2>
          <p className="text-gray-500 mb-4">
            Run a multiplayer sprint retrospective where participants can
            interact in real-time.
          </p>
          <Link
            to="/retro/room/some-id"
            className="bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 duration-150 inline-block w-full text-center"
          >
            create new retrospective
          </Link>
        </div>
      </section>
    </>
  );
}
