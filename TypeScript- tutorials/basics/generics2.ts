// function takes T and returns a tuple of 2 fns... 1st fn returns T and 2nd fn takes T and returns nothing
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
st1setter(43);
console.log(st1getter());

//////////////// overriding  inferred generic type

// with this only specific type I can give
const [st2getter, st2setter] = simpleState<string>("str");
console.log(st2getter());
// in st2String we have to give string only
st2setter("59");
console.log(st2getter());

// to make it to take null also.. just use a union tyoe
const [st3getter, st3setter] = simpleState<string | null>(null);
console.log(st3getter());
st3setter("str");
console.log(st3getter());

// function ranker(items: any[], rank: (v: any) => number): any[] {}
function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  const ranks = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Rank<R> {
  item: R;
  rank: number;
}
function ranker2<R>(items: R[], rank: (v: R) => number): R[] {
  const ranks: Rank<R>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((A, b) => A.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemons: Pokemon[] = [
  {
    name: "Pikachu",
    hp: 45,
  },
  {
    name: "Squirtle",
    hp: 37,
  },
];

const pokeRanks = ranker(pokemons, (x) => x.hp);
console.log(pokeRanks);
const pokeRanks2 = ranker2(pokemons, (poke) => poke.hp);
console.log(pokeRanks2);

export {};
