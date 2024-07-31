import { getAllCurrentTokens } from "@/Functions/Function";
import RefreshButton from "@/components/RefreshButton";
import TokenCard from "@/components/TokenCard";

export const revalidate = 0;

const getTokens = async () => {
  const data = await getAllCurrentTokens();
  console.log("Data: ", data);
  return data;
};
const page = async () => {
  const tokens = await getTokens();

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl font-semibold">Today's Tokens</h1>
          <RefreshButton />
        </div>
        <hr className="b-2 border-zinc-500 my-4" />
      </div>
      <div className="flex flex-col gap-4 overflow-scroll">
        {tokens.map((obj, key) => {
          return (
            <TokenCard
              key={key}
              tokenId={obj.id}
              studentId={obj.data.id}
              studentName={obj.data.name}
              isCollected={obj.data.isCollected}
              date={obj.data.date}
              generationTime={obj.data.generationTime}
              dispenseTime={obj.data.Printing_time}
            />
          );
        })}
        {!tokens[0] && (
          <h1 className="text-center text-7xl slate-950 font-extrabold opacity-20 mt-8">
            EMPTY
          </h1>
        )}
      </div>
    </div>
  );
};

export default page;
