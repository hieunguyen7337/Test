'use strict';

/**
 * Migration: 20240107165715_wzsjxdzwuckzlra
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ojlrfmfqbm', function(table) {
    table.string('dkywpxmrqj');
    table.json('ducwmntbir');
    table.text('gqfllirngp');
    table.boolean('kypumcxakr');
    table.float('bnchlgvyee');
  });
  await knex.schema.alterTable('glamhcluow', function(table) {
    table.boolean('jwdjqutvtx');
    table.json('ybfqzegwpc');
    table.bigInteger('wdaydrotlk');
    table.text('cgsxikbvkd');
    table.integer('ywkmjidjcq');
  });
  await knex.schema.alterTable('glpywclthe', function(table) {
    table.json('bjwwibeevi');
    table.json('gpemrldawu');
    table.float('nbirpgauuo');
    table.json('qkwguhlnnn');
    table.string('oekfotfhsv');
    table.bigInteger('njjqhkafuu');
    table.json('zswtoniyef');
    table.boolean('oeaapwttyi');
    table.text('yawtboddgm');
    table.float('jvrqagmgph');
  });
  await knex.schema.alterTable('aoncvgvcnt', function(table) {
    table.float('naciryfvbl');
    table.timestamp('jnflwyhckj');
    table.timestamp('llwdhefplr');
    table.timestamp('prqgmonird');
    table.integer('lrcrnbxsfn');
    table.bigInteger('bupctyzvmq');
    table.text('rtlnwdidnk');
    table.text('pvbauqqnwr');
    table.string('kbzpjcuuir');
  });
  await knex.schema.alterTable('ewbqsjqlmv', function(table) {
    table.integer('axojyeascn');
    table.string('brnlkflprv');
    table.json('wcavaomags');
    table.float('tbvbwjagqt');
    table.boolean('bbvwdpmkiw');
    table.timestamp('zcrctrmgsm');
    table.integer('dgvhfhpjlv');
    table.text('egpqpeepep');
    table.json('xhjzggzcsk');
  });
  await knex.schema.alterTable('jhrtdakitx', function(table) {
    table.timestamp('enubqrnpgf');
    table.bigInteger('jnncqmutsl');
    table.json('jkjbuwxosv');
    table.text('llyqnhrgyo');
    table.bigInteger('pydlpigjoc');
  });
  await knex.schema.alterTable('pbveiaedxx', function(table) {
    table.string('wcavqnsdvc');
    table.string('peirlhtopl');
    table.integer('fbwwjnkfeq');
    table.integer('nwztzhzfsr');
    table.bigInteger('ygtwvoshir');
    table.timestamp('dstpmvaifk');
  });
  await knex.schema.alterTable('djpvzhdutz', function(table) {
    table.json('ubmpayclwa');
    table.float('wwnwvpwoco');
    table.float('ymvzcuyicq');
  });
  await knex.schema.alterTable('ahsrajbjyz', function(table) {
    table.integer('yluirlwymu');
    table.integer('jynpgxqbai');
    table.bigInteger('jmstnylizn');
    table.string('ferrblwxhw');
    table.bigInteger('sfqpwcrige');
  });
  await knex.schema.alterTable('ccjkypcdbt', function(table) {
    table.timestamp('exurwevipy');
    table.boolean('eamgurxnji');
    table.json('okueabsuqd');
    table.timestamp('odqkppfplx');
    table.boolean('vomrqcfrfm');
    table.string('akuqggypti');
    table.timestamp('vkitmcbcfi');
    table.string('xuywfcdvag');
  });
  await knex.schema.alterTable('zdwromtwru', function(table) {
    table.json('lsgjwcefoz');
    table.float('iuwxyiopkb');
    table.json('gyazpixzkb');
    table.float('upbiypujho');
    table.text('gfzybuofel');
  });
  await knex.schema.alterTable('lsblqxwoew', function(table) {
    table.string('wfiwjcpozv');
    table.float('fggqtqxfth');
    table.boolean('mevulyfihl');
    table.string('xxundnuvmq');
    table.string('lxiwhgkwnk');
    table.float('ijelzzdygp');
  });
  await knex.schema.alterTable('sjxbdvwoza', function(table) {
    table.string('bgtkwglhmm');
    table.boolean('zayccacgmi');
    table.text('oludtmhwwy');
    table.timestamp('ozofldebit');
    table.float('oyhdnfwfue');
    table.string('iwhcmulpzv');
  });
  await knex.schema.alterTable('kiiiczpagh', function(table) {
    table.json('tialenorxo');
    table.bigInteger('hzgxosvxna');
    table.json('akaypyklhi');
    table.json('wghbmrjvxg');
  });
  await knex.schema.alterTable('rdmoumwvhc', function(table) {
    table.text('jwfhttxprv');
    table.string('jpgzwmktbt');
    table.text('nobapibulv');
    table.text('nlsxskfafi');
    table.integer('mlgwjtrmsc');
  });
  await knex.schema.alterTable('xqujkkcaie', function(table) {
    table.float('zhwzjuhahs');
    table.boolean('hwjnskzwtb');
    table.timestamp('lnlnonbtbu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};