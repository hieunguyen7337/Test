'use strict';

/**
 * Migration: 20240915012538_subnwqriozdtocl
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zntssotffy', function(table) {
    table.boolean('hkniusjxac');
    table.boolean('zgposkfigi');
    table.json('uywigrfgub');
    table.text('rbcpedevmd');
    table.text('wivlrwcpwq');
    table.boolean('shlmnqyyeg');
    table.string('yvsmozdaad');
    table.text('mygwdcbgtj');
    table.float('hmdoxkoxgj');
  });
  await knex.schema.alterTable('ikfjkqriio', function(table) {
    table.string('mywjoqudez');
    table.timestamp('xghpmwxewq');
    table.integer('ycgpgrwrfg');
    table.float('qhoquhvget');
    table.string('ntbcsgmvdj');
    table.integer('bcbrxskubl');
    table.string('nyekwujtej');
  });
  await knex.schema.alterTable('ffwvvffvkn', function(table) {
    table.bigInteger('npncwkmkyk');
    table.string('xzgwnocyyr');
    table.json('oxvwkvkogw');
    table.integer('qtfxdwyeyr');
    table.bigInteger('qxyyvhbchc');
    table.integer('euociurauy');
    table.text('xmrquviewn');
  });
  await knex.schema.alterTable('tykfpqmnll', function(table) {
    table.string('ekcqfqrnpk');
    table.boolean('iubtkesnqm');
    table.json('cpmqdqqhvs');
    table.string('ayfzkjsmtg');
    table.boolean('tsbvgkjvvz');
    table.boolean('sjderinidr');
    table.json('cdcuteqhti');
    table.json('chxheweemz');
    table.text('rmqoinsvgo');
    table.string('wqtryujfge');
  });
  await knex.schema.alterTable('cfrkdlhyht', function(table) {
    table.timestamp('vzikrbogch');
    table.boolean('rnkmzjhjfp');
    table.bigInteger('pnlmpxjrbj');
    table.timestamp('jhqemfuxfo');
    table.string('ntlrwqrazo');
  });
  await knex.schema.alterTable('luyxteddxg', function(table) {
    table.text('ciuqfcaszv');
    table.timestamp('ptvlinjqrp');
    table.bigInteger('fhmbohvzhk');
    table.string('exlpdqzmuq');
    table.text('ggaevviiow');
    table.bigInteger('nzpgbqgixq');
    table.boolean('agbwlnwutu');
    table.string('eypriprckm');
    table.timestamp('npkmkbqwnq');
    table.bigInteger('rmhkrevedx');
  });
  await knex.schema.alterTable('rlcgaipawc', function(table) {
    table.json('yyshgqrnvy');
    table.timestamp('kyuixnvuci');
    table.timestamp('upghxnhpjf');
    table.float('qvnzfyboah');
  });
  await knex.schema.alterTable('tfpuazugix', function(table) {
    table.timestamp('ouarktyrty');
    table.boolean('zrlrbzinwd');
    table.integer('qftqqjnhwh');
    table.bigInteger('eraacmfnci');
    table.string('otrarsohef');
    table.boolean('cfhchfqfhw');
    table.string('otfdasdxiz');
    table.string('fzqxehkdzu');
  });
  await knex.schema.alterTable('wabbrbnotl', function(table) {
    table.string('mryudqaixg');
    table.float('dqvfbwdumv');
    table.timestamp('umrvaqsdhg');
    table.boolean('tokfhazanb');
    table.float('fsjuxyczwl');
    table.text('fhdbkmzojy');
  });
  await knex.schema.alterTable('erqnpeavwf', function(table) {
    table.bigInteger('nwtkpjpkoj');
    table.json('uwuitjutia');
    table.text('jvpmesavto');
    table.timestamp('yjtaxesxrr');
    table.boolean('hlcyezqogn');
    table.string('islaszsikk');
  });
  await knex.schema.alterTable('mvdqarftot', function(table) {
    table.float('rauzjdcupx');
    table.timestamp('ukozstbuug');
    table.bigInteger('etvabzzscd');
    table.integer('gpnhbxeojn');
    table.integer('beixmkwhdm');
  });
  await knex.schema.alterTable('ttzgqkqain', function(table) {
    table.text('wnrmejupif');
    table.timestamp('bifwrjmube');
    table.string('luhoulwlht');
    table.string('bprplhejnv');
    table.bigInteger('rjsyapglkr');
    table.float('hcpyfvpqpu');
    table.text('wxleubessq');
    table.text('esjzbikqpm');
    table.text('bxmzqisjex');
  });
  await knex.schema.alterTable('plrlznzlkp', function(table) {
    table.integer('krtmqpnyrz');
    table.bigInteger('ajndrveleo');
    table.json('weejlkquex');
    table.bigInteger('etnqeryfqj');
  });
  await knex.schema.alterTable('bwwqfqzjvn', function(table) {
    table.string('dldcpvdsmv');
    table.text('ftpsizdedb');
    table.string('wcwfeahipl');
    table.bigInteger('hhxmixfhvv');
  });
  await knex.schema.alterTable('ktxtnkwnvy', function(table) {
    table.integer('bxuwovcuxf');
    table.text('muyjgdrkhv');
    table.text('ohigoxcmkc');
    table.float('tkkghdoqbg');
    table.integer('zymniysron');
    table.integer('seeyqjilqg');
    table.text('sqefqabprm');
    table.json('rgngrknbhm');
    table.string('ygahexpipu');
    table.text('gizqcixpad');
  });
  await knex.schema.alterTable('oudjamdvdg', function(table) {
    table.bigInteger('jwsiinabvk');
    table.json('ygnwkkafbd');
    table.integer('tiawmgkwcc');
    table.json('gpukiirzwh');
    table.text('vnnlvnjmic');
    table.float('tkoeypwynb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};