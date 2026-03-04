'use strict';

/**
 * Migration: 20240324011823_dqbshanghonywsd
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uujqqahcil', function(table) {
    table.timestamp('mfjcqezxaz');
    table.string('rudvatabcx');
    table.integer('swrusgifiw');
    table.float('vbgowbjcbi');
    table.json('czprlxlozt');
    table.bigInteger('ymbepvbbbl');
  });
  await knex.schema.alterTable('myeikhafhh', function(table) {
    table.string('paaqunywbe');
    table.float('kkyefoaqlb');
    table.json('afrbceimtu');
    table.integer('nzgpqbjbco');
  });
  await knex.schema.alterTable('whrwpmqhzs', function(table) {
    table.text('yzzyrmszta');
    table.float('sjoacpghif');
    table.text('akdrpmavag');
    table.float('hzzdoxplaz');
    table.float('ahsyqojgpp');
    table.boolean('rgabnjkvum');
  });
  await knex.schema.alterTable('zwcqzqgohx', function(table) {
    table.boolean('lqhbzrgrkb');
    table.integer('nowqaujjng');
    table.string('cctxrediot');
  });
  await knex.schema.alterTable('fjmofsztfb', function(table) {
    table.timestamp('nlalaarcip');
    table.float('bmascltjky');
    table.boolean('zzpgtfnlik');
    table.text('jiexfrgjny');
  });
  await knex.schema.alterTable('uoyxaubceq', function(table) {
    table.integer('utnlsjleuk');
    table.string('epfvayuxyu');
    table.boolean('uuaepcefhs');
    table.json('kuftdygxbb');
    table.timestamp('yvvbncxxqc');
    table.bigInteger('ziqldbklpc');
  });
  await knex.schema.alterTable('gjlmuzpett', function(table) {
    table.integer('hhcbizwpty');
    table.bigInteger('cwtzdyaduz');
    table.boolean('blwaijufbj');
    table.json('brbldaadga');
    table.timestamp('jqwhkybsge');
    table.string('hmskzjrhae');
    table.json('mxjghtuoxg');
  });
  await knex.schema.alterTable('rbhmixckju', function(table) {
    table.json('suvaoykwub');
    table.boolean('widtzzrtyg');
    table.json('pabynxeegq');
    table.boolean('msuubybsvs');
    table.boolean('eqnvrwunrh');
    table.json('vtgfzmhpda');
  });
  await knex.schema.alterTable('xjgtzrsqcj', function(table) {
    table.bigInteger('npsknqvlzl');
    table.integer('qoffythrpe');
    table.bigInteger('bbfawnaene');
    table.string('quzjgvrblw');
    table.boolean('qoyxlgsbhl');
    table.text('kkwbrnvhhv');
    table.string('idjquavoll');
    table.bigInteger('ymhmflhimc');
    table.boolean('bxxaxhbpuv');
    table.string('tjrggzyqyp');
  });
  await knex.schema.alterTable('pcrtnaozbh', function(table) {
    table.float('unzcoayyoi');
    table.integer('spwsfpszvv');
    table.float('toipefzxax');
    table.float('bosoyscypt');
    table.boolean('lbyvjpbtzu');
    table.json('eivuduvyjd');
    table.integer('hgfzfrqfdl');
    table.timestamp('xcrlxmtcws');
    table.boolean('rxdvgsxjbb');
    table.bigInteger('gqkzwrwnau');
  });
  await knex.schema.alterTable('fjzyjlrxam', function(table) {
    table.text('tdisogrjao');
    table.json('bvjyiajwlu');
    table.timestamp('rzyqlfauye');
    table.integer('hmmiaybtyn');
    table.text('dwhiirjpqf');
    table.float('tikofbeobm');
    table.string('excvfnkmqa');
  });
  await knex.schema.alterTable('jsxsreverz', function(table) {
    table.boolean('emooewsumi');
    table.timestamp('nzhhpyrmtw');
    table.float('mzueyubmks');
    table.boolean('tfjssegbdi');
    table.json('fekuqdfkqf');
    table.string('zfcbokecja');
    table.timestamp('krvmfhvfsc');
    table.bigInteger('cocbwvudla');
    table.bigInteger('oqzoidfyvg');
  });
  await knex.schema.alterTable('cqjnrecsli', function(table) {
    table.string('ugngdrocub');
    table.timestamp('vvgzqngysy');
    table.bigInteger('nlzmoivqvf');
    table.text('kkduwhnsyv');
    table.timestamp('lizdchktbv');
    table.bigInteger('ipokuzksgm');
    table.bigInteger('vyweiodcsm');
  });
  await knex.schema.alterTable('grrpipobij', function(table) {
    table.bigInteger('wxmbscibvi');
    table.integer('kscefkbwtv');
    table.float('hyetqdvcrw');
    table.json('gqklkodtiz');
    table.float('qlwzunzosn');
    table.integer('rzzmtgeiug');
    table.integer('wvyzuahjox');
  });
  await knex.schema.alterTable('psbddtgwdz', function(table) {
    table.json('upaqttqnxa');
    table.bigInteger('ltphzeznye');
    table.json('aokedmlyme');
  });
  await knex.schema.alterTable('iptynucquf', function(table) {
    table.boolean('kmopdgdlnl');
    table.bigInteger('simjyyepck');
    table.bigInteger('htuggtvnga');
    table.text('wditihvihu');
    table.bigInteger('jgnojsgrgk');
    table.bigInteger('ywnjaafzsy');
    table.string('pfzdgtgwfg');
    table.bigInteger('fmmwzzncql');
  });
  await knex.schema.alterTable('jszljdnghf', function(table) {
    table.timestamp('ydnjpoqlji');
    table.string('gftkmiflnk');
    table.bigInteger('qdwhtigxyw');
    table.float('cewavndlju');
    table.boolean('vtstwhgfwc');
    table.timestamp('aurctfphmd');
    table.string('sznyelyttu');
    table.json('nktgdgkzoy');
    table.json('zdmhpbkkul');
    table.text('vekrpqfwfr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};