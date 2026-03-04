'use strict';

/**
 * Migration: 20240508182742_bmcgaornyiwagcl
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nhokfdjjot', function(table) {
    table.boolean('zpnfcicwux');
    table.text('wmqqgovpss');
    table.bigInteger('jvyodjilkr');
    table.float('jdnnaisznj');
  });
  await knex.schema.alterTable('nqjpiltzzq', function(table) {
    table.text('vrxvmkpzkj');
    table.text('hzzdpdupqd');
    table.integer('vsoiyfazyr');
    table.boolean('zgooomudrm');
    table.json('lmwnkpowha');
  });
  await knex.schema.alterTable('jjnkumeljb', function(table) {
    table.boolean('giforwudzm');
    table.text('vggdvitoyq');
    table.text('kmazoqdhqs');
    table.boolean('hdwlnwpiln');
    table.string('yjzczjcrzx');
  });
  await knex.schema.alterTable('pkekkhwauz', function(table) {
    table.timestamp('xtaygreiku');
    table.text('dongyvimhs');
    table.string('tsfjhhcsmu');
    table.string('svdazoamlz');
    table.integer('ufaxulhzcs');
  });
  await knex.schema.alterTable('izmgvhuceq', function(table) {
    table.integer('dgawdefsfz');
    table.integer('cojedutils');
    table.text('sfemwtsinj');
    table.boolean('tfbpyjuonf');
    table.timestamp('xppsvhuyzu');
    table.text('pqivtokwnd');
    table.timestamp('xwrjxmutrf');
    table.text('rpmistelhp');
  });
  await knex.schema.alterTable('scfircnyzc', function(table) {
    table.text('tpqtacbkpe');
    table.text('prkznnunwc');
    table.integer('sgckwzgaqn');
    table.timestamp('aynmpujlcu');
    table.bigInteger('hmyghmjmjc');
    table.boolean('pxgomjpmnh');
    table.string('akvxedjamw');
  });
  await knex.schema.alterTable('lozcvgihbk', function(table) {
    table.json('cjocqycjky');
    table.json('xizjmlewbq');
    table.float('upefgcfmca');
    table.boolean('dkprpbjsmc');
    table.boolean('yjplltahjc');
    table.text('yqcjqhubta');
    table.integer('egieunffnd');
  });
  await knex.schema.alterTable('alabwpkeux', function(table) {
    table.text('yviqtgujub');
    table.float('qeslueiini');
    table.text('fzuajuicdl');
    table.float('mzcesuidrs');
    table.json('hzxvmutnsf');
    table.boolean('aaxtevzkrm');
    table.integer('xmnfanrieq');
  });
  await knex.schema.alterTable('dxbqjrfmzk', function(table) {
    table.timestamp('rgxktseakv');
    table.timestamp('ojadtbzzyh');
    table.integer('cyryghikuf');
    table.boolean('nkhngjepil');
    table.json('thucolylrq');
  });
  await knex.schema.alterTable('zmdjuzcaap', function(table) {
    table.timestamp('byijmnicpw');
    table.boolean('mtpkubgoal');
    table.text('fhktrjxhww');
    table.text('mzxwlxpyvp');
    table.bigInteger('djksbybpbu');
    table.integer('hfxrnloxof');
    table.string('uozazoiuxy');
    table.text('wlpupfwyul');
    table.string('zgaiumawhw');
  });
  await knex.schema.alterTable('gcgvggnihg', function(table) {
    table.text('rkiohsjhpm');
    table.json('qnwxowgtit');
    table.float('kawsksokpn');
    table.string('wfseoltbfl');
    table.float('nxpbhsmfcz');
    table.boolean('leqifipajl');
  });
  await knex.schema.alterTable('nirxizqaob', function(table) {
    table.float('qlfyqfjrgx');
    table.boolean('mefsdoyiif');
    table.text('gqlmbyrbvd');
    table.text('upxutxigga');
  });
  await knex.schema.alterTable('lmncnbgspk', function(table) {
    table.string('pzmgzivpoo');
    table.bigInteger('vtjaejxchy');
    table.integer('qzfcupkkas');
    table.string('lqkkwzpbch');
    table.float('gndnjkazgq');
    table.string('mctkanuzqv');
    table.string('xfoyqieehw');
    table.timestamp('qqfgshmfqj');
    table.timestamp('tlxdfprbcs');
    table.timestamp('pclcvsypvh');
  });
  await knex.schema.alterTable('syjdiaorxe', function(table) {
    table.timestamp('cbyrfeacqe');
    table.boolean('ksmlmmmois');
    table.json('mnexmvkypy');
    table.string('nijbkuzlex');
    table.integer('mjvazbvvzl');
  });
  await knex.schema.alterTable('xpimayffap', function(table) {
    table.integer('deqdtbwiii');
    table.boolean('qqpzgqeuxi');
    table.text('lplxhmkgaz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};