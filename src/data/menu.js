export const menu = {
  soups: {
    label: 'Polévky',
    items: [
      { name: 'Česnečka', description: 'S krutony, sýr, čerstvý česnek', price: 65 },
      { name: 'Kulajda', description: 'Smetanová, houby, vejce, kopr', price: 75 },
      { name: 'Bramboračka', description: 'S houbami a majoránkou', price: 65 },
      { name: 'Hovězí vývar', description: 'S játrovými knedlíčky a nudlemi', price: 75 },
    ],
  },
  starters: {
    label: 'Předkrmy',
    items: [
      { name: 'Nakládaný hermelín', description: 'S křupavou bagetou a brusinkami', price: 145 },
      { name: 'Tatarský biftek', description: 'Hovězí svíčková, topinky, česnek', price: 245 },
      { name: 'Utopenec', description: 'Špekáček v octovém nálevu, cibule, chléb', price: 89 },
      { name: 'Klobása z místního masa', description: 'Křen, hořčice, kváskový chléb', price: 135 },
      { name: 'Bramboráky', description: 'Se slaninou a zakysanou smetanou', price: 135 },
    ],
  },
  mains: {
    label: 'Hlavní chody',
    items: [
      { name: 'Svíčková na smetaně', description: 'Houskový knedlík, brusinky, šlehačka', price: 285, featured: true },
{ name: 'Vepřo knedlo zelo', description: 'Pečené vepřové, houskový knedlík, kysané zelí', price: 245, featured: true },
{ name: 'Hovězí guláš', description: 'Houskový knedlík, čerstvá cibule', price: 235, featured: true },
{ name: 'Pečená kachna', description: 'Červené zelí, houskový a bramborový knedlík', price: 345, featured: true },
{ name: 'Halušky se slaninou a bryndzou', description: 'Valašská klasika', price: 215, featured: true },
      { name: 'Pstruh na másle', description: 'Vařené brambory s petrželkou', price: 295 },
      { name: 'Vepřová pečeně na kmíně', description: 'Dušené zelí, bramborový knedlík', price: 235 },
      { name: 'Kuřecí řízek', description: 'Bramborový salát', price: 235 },
      { name: 'Zvěřinový guláš', description: 'Jelení maso, brusinky, houskový knedlík', price: 325 },
      { name: 'Segedínský guláš', description: 'Vepřové, kysané zelí, houskový knedlík', price: 225 },
    ],
  },
  vegetarian: {
    label: 'Bezmasá jídla',
    items: [
      { name: 'Smažený sýr', description: 'Brambory, tatarská omáčka', price: 185 },
      { name: 'Bramborové knedlíky plněné', description: 'S orestovanou cibulkou', price: 195 },
      { name: 'Zapečené brambory', description: 'Se sýrem, smetanou a bylinkami', price: 175 },
      { name: 'Koprová omáčka', description: 'Vařené vejce, brambory', price: 165 },
    ],
  },
  desserts: {
    label: 'Dezerty',
    items: [
{ name: 'Štramberské uši', description: 'Místní specialita, skořice, mandle', price: 75, featured: true },      { name: 'Palačinky s domácí marmeládou', description: 'Šlehačka', price: 95 },
      { name: 'Jablečný štrůdl', description: 'Vanilková omáčka', price: 85 },
      { name: 'Domácí věnečky', description: 'Karamelová poleva', price: 65 },
      { name: 'Horké maliny', description: 'Vanilková zmrzlina, šlehačka', price: 105 },
    ],
  },
  drinks: {
    label: 'Nápoje',
    items: [
      { name: 'Pilsner Urquell 0,5 l', description: '', price: 55 },
      { name: 'Radegast 12° 0,5 l', description: '', price: 52 },
      { name: 'Kozel 11° 0,5 l', description: '', price: 50 },
      { name: 'Moravské víno 0,2 l', description: 'Bílé / červené', price: 75 },
      { name: 'Domácí limonáda 0,4 l', description: 'Bez, máta, citron', price: 65 },
      { name: 'Espresso', description: '', price: 45 },
      { name: 'Cappuccino', description: '', price: 65 },
      { name: 'Čaj', description: 'Výběr z několika druhů', price: 45 },
    ],
  },
};