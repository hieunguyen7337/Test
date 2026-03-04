'use strict';

/**
 * Migration: 20240904232729_oclevqdxorlwujc
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gbsxlqsdbv', function(table) {
    table.float('hhldlliyfb');
    table.string('ptynnlclch');
    table.bigInteger('mwqaeszjzb');
    table.boolean('bxhmnnsbqt');
    table.string('aqjlyqtrls');
    table.text('mozbdcuslo');
    table.json('nluwhhkgmq');
    table.bigInteger('gcmnaunfkj');
    table.integer('hojfronuik');
    table.timestamp('onbtinyqxr');
  });
  await knex.schema.alterTable('xxhowimivo', function(table) {
    table.float('tnefhnudns');
    table.timestamp('bdhzvfxfsm');
    table.boolean('insqqxnyog');
    table.timestamp('uispsgkyzx');
    table.integer('kkjgqswesx');
    table.text('iuddvkntcy');
    table.bigInteger('bparcadljy');
  });
  await knex.schema.alterTable('mjlpbmeoel', function(table) {
    table.bigInteger('pueaabdtmm');
    table.json('ieyoflhcjr');
    table.boolean('eiuhnckvfi');
    table.boolean('wccueysglo');
    table.bigInteger('qvneikhyfc');
    table.string('oorxqcijyh');
    table.bigInteger('btewxsotbn');
    table.boolean('rcrjralybp');
    table.float('wqnrgjqkrl');
  });
  await knex.schema.alterTable('omcetgojpy', function(table) {
    table.float('ynzwmdpncx');
    table.float('vvvinrgjbl');
    table.float('azsddtdpzu');
    table.json('ktnsjffuha');
    table.integer('cmermncrpe');
    table.integer('yxbpejvjnb');
    table.timestamp('cwwkmbyedu');
    table.text('glkddvcxen');
    table.text('cmlwhnycxa');
    table.integer('orkvbolsvj');
  });
  await knex.schema.alterTable('yooxkqcsgc', function(table) {
    table.text('khjwzljxia');
    table.float('mwnpnfjsuz');
    table.integer('mqwmkuytkw');
    table.timestamp('wssximiqkd');
  });
  await knex.schema.alterTable('xlzrhfmvzj', function(table) {
    table.integer('dhbldecewm');
    table.float('ebhpjcqhgg');
    table.boolean('cyomsxnegz');
    table.bigInteger('pheikrowzi');
    table.bigInteger('ajmlroqflg');
    table.float('ltzjhdpuos');
  });
  await knex.schema.alterTable('skqrqanawi', function(table) {
    table.json('cwyifcrehr');
    table.bigInteger('wrfnkkafrs');
    table.float('zsqezdruuz');
  });
  await knex.schema.alterTable('jnbdewwmsa', function(table) {
    table.text('fvepplumbm');
    table.integer('iexzwscybe');
    table.timestamp('hbfjqxtpfd');
    table.bigInteger('pqnynhmjjf');
    table.bigInteger('anjrzjysev');
    table.string('isiacvnxox');
    table.integer('lxrucsgubw');
    table.integer('ypjyfqivof');
  });
  await knex.schema.alterTable('ozmbzxdjgt', function(table) {
    table.json('vdgimombzq');
    table.timestamp('kzqoenzppc');
    table.boolean('ejsdtimzse');
    table.timestamp('gtklkhyaad');
    table.float('rvjqcnrkxp');
    table.boolean('rjwyubtqkc');
    table.text('ojauwbyytu');
  });
  await knex.schema.alterTable('pvzvzpsydy', function(table) {
    table.text('absoqykqmi');
    table.json('jhjzdwjsvt');
    table.bigInteger('mghjrxykhq');
    table.bigInteger('ultvwvmlfl');
    table.integer('otxfnffoad');
    table.text('qdftmecdfj');
    table.bigInteger('hwjicojyie');
  });
  await knex.schema.alterTable('yuekvglpwj', function(table) {
    table.string('zzotudiiax');
    table.boolean('qxrbinedhs');
    table.integer('nfjdqjjnxf');
    table.json('vhgaahowfb');
    table.timestamp('wvldacnaff');
  });
  await knex.schema.alterTable('ebfwumjtll', function(table) {
    table.bigInteger('yzfteruvbn');
    table.text('jvcjfhptiw');
    table.string('nksuamputw');
  });
  await knex.schema.alterTable('iyoetjdjjx', function(table) {
    table.string('kzdauzrcov');
    table.string('gosfbyvpjn');
    table.bigInteger('uqpghtzfyr');
    table.timestamp('nwciwodpkq');
    table.boolean('bwhmlcdmlv');
    table.string('iltapoeihm');
    table.float('lxgsaatduy');
    table.timestamp('yuudxmwwgb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};