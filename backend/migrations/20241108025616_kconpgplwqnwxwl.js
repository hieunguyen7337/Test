'use strict';

/**
 * Migration: 20241108025616_kconpgplwqnwxwl
 * Description: Please work this time
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fikboekjsz', function(table) {
    table.integer('ptfrfiyeya');
    table.text('qgqnojvbkr');
    table.text('magwdtmtfu');
    table.string('tomlebskwm');
    table.string('avdvertlzi');
  });
  await knex.schema.alterTable('pbccmsfsnb', function(table) {
    table.text('rovofvjant');
    table.bigInteger('akfypygjmr');
    table.float('sthexnxhdn');
    table.boolean('skvoekkeyr');
    table.json('pdizzfmawx');
    table.float('brkbfjxyav');
    table.timestamp('avoxbgyumf');
  });
  await knex.schema.alterTable('gjnrrtlpxf', function(table) {
    table.timestamp('tpfyobkhqm');
    table.float('oibuwgmdrq');
    table.bigInteger('wxsdymjykr');
    table.timestamp('qutpmnoxvo');
    table.boolean('zarhfyleqm');
    table.string('ztizrtsnta');
    table.timestamp('ehgzhqmlla');
  });
  await knex.schema.alterTable('syuhwqpvos', function(table) {
    table.text('xrgyeiwejn');
    table.json('ryytcjmxkd');
    table.string('xpbtomnhmq');
    table.json('gumyuweahc');
    table.json('wjxktpanwc');
    table.text('pzjwinqeve');
    table.boolean('qgnoibdhki');
    table.json('wskvxhgclb');
  });
  await knex.schema.alterTable('zgfalgjiuu', function(table) {
    table.integer('mlcgnftdpq');
    table.json('ojhqzvwtah');
    table.float('oljwfyvovh');
    table.float('aqvnxhiyxf');
    table.float('qilweelian');
    table.string('fgnlujcdht');
    table.string('smmvrnxwzn');
  });
  await knex.schema.alterTable('ejgedinslw', function(table) {
    table.json('fwvcaiegtm');
    table.string('mtumvywplk');
    table.boolean('givdggmykz');
    table.integer('armruxqmis');
  });
  await knex.schema.alterTable('yhpipwckei', function(table) {
    table.timestamp('wflwpvffro');
    table.bigInteger('hmlnubfetn');
    table.boolean('ybfrqmbwzj');
    table.json('lxmlhcyuau');
    table.timestamp('wsmbvzjgge');
    table.bigInteger('uxeapfmobs');
    table.json('sipttqnymn');
    table.float('xmjshdewmo');
    table.string('hmuokjqudc');
    table.timestamp('sveidhnlgo');
  });
  await knex.schema.alterTable('tcyqfcrwaw', function(table) {
    table.timestamp('gbyfgjdqai');
    table.string('touwwrmkxs');
    table.text('fefyiiddku');
    table.integer('zdehqvwptm');
    table.timestamp('lqyjxxowau');
    table.bigInteger('outticubzi');
    table.integer('alaewtprwc');
    table.string('bkkiazxkhd');
    table.boolean('mmjtpfpnyy');
  });
  await knex.schema.alterTable('rwtfgmsklz', function(table) {
    table.timestamp('ujdkybsopd');
    table.integer('igalehkxof');
    table.boolean('qvqolqkvep');
    table.float('fejvbtjlof');
    table.text('qlkgarpcxn');
    table.bigInteger('vnrvwhmdul');
    table.bigInteger('xqsnssfsaq');
    table.text('qwxyoqtmtl');
  });
  await knex.schema.alterTable('liihcvxtiu', function(table) {
    table.text('krrjbezwpq');
    table.bigInteger('iuinqphgas');
    table.timestamp('tnyckjxazy');
    table.timestamp('yteftmjfyi');
  });
  await knex.schema.alterTable('rvbpxezisu', function(table) {
    table.timestamp('wlyjrgdpbc');
    table.integer('brgdkkqbkw');
    table.string('umavwqagmw');
    table.text('efqmwmqhkw');
  });
  await knex.schema.alterTable('wmpfoidkkw', function(table) {
    table.text('kypqhllvbd');
    table.bigInteger('tkdixarkll');
    table.text('kdcavnogoc');
    table.text('vkvkbrwlse');
    table.timestamp('eytiotngeu');
    table.float('lzswudogme');
    table.text('snybnfxegb');
    table.string('jrgnlrmcka');
  });
  await knex.schema.alterTable('pivjgywfrp', function(table) {
    table.json('ujoacowkjp');
    table.float('spubjxcvrk');
    table.bigInteger('ysnrqwhffq');
    table.bigInteger('xpvndkwkhh');
    table.string('nqiwxjpdfk');
    table.json('luishwaptt');
    table.timestamp('voggoquybd');
    table.integer('mykmrniulz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};