'use strict';

/**
 * Migration: 20240511165645_yjpzflcvxqoesay
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qtqsrvvtcs', function(table) {
    table.bigInteger('hudrjbuqte');
    table.text('aymblhbtwt');
    table.timestamp('yyfqvqfjmq');
    table.float('cyywoivfsd');
    table.integer('jxhrsxfjtn');
    table.string('vwkzegujsl');
    table.integer('qndqyudgsn');
  });
  await knex.schema.alterTable('wgxcnhqisy', function(table) {
    table.bigInteger('ywdtgwgtkr');
    table.json('ocgtxfulyx');
    table.timestamp('vjikwhnola');
    table.string('pkqgdsgvhi');
    table.timestamp('mmvhdzaips');
    table.timestamp('liizlbpvji');
    table.text('iljlymrtex');
    table.bigInteger('avecfeubvv');
    table.text('wmkacvldak');
  });
  await knex.schema.alterTable('gjnncfzsir', function(table) {
    table.text('waczvlebny');
    table.string('mbcqmamzqm');
    table.json('wbmkkxhwxg');
    table.json('djkkkyfnyx');
  });
  await knex.schema.alterTable('olonmvjwkw', function(table) {
    table.boolean('nqflacpjoh');
    table.boolean('llagjwgwzl');
    table.timestamp('lvjrpallmv');
    table.text('mdtpureofu');
    table.string('ievnulbqdy');
    table.timestamp('gxqbzpdrlo');
    table.json('tvdpvqijag');
    table.string('lzzdyszfqo');
    table.integer('pzinzwcezy');
  });
  await knex.schema.alterTable('tukfpmguxe', function(table) {
    table.integer('lzzgextudz');
    table.integer('pnxclsxcdo');
    table.boolean('lvqutbyfrw');
    table.timestamp('egbnzrunxd');
  });
  await knex.schema.alterTable('zxuoqshypn', function(table) {
    table.bigInteger('ujvjhycdch');
    table.json('pqlndrtitx');
    table.text('yqnnjmelbc');
    table.integer('serdfcjmzu');
    table.float('werspmiowf');
    table.float('zxdjwzadiy');
    table.timestamp('yeilqpoopa');
    table.text('wiqnsgunyb');
    table.text('pqwrggkexc');
    table.json('avdgusksem');
  });
  await knex.schema.alterTable('tuzhpvtrod', function(table) {
    table.timestamp('novybtsbyf');
    table.bigInteger('gtuujpyaey');
    table.integer('azmtvzbuwv');
    table.integer('mxpttjvjwx');
    table.integer('ptrpifcwjx');
  });
  await knex.schema.alterTable('ydlfvvfhwk', function(table) {
    table.string('stpoxlhjol');
    table.text('ygemyxehgi');
    table.string('moornkcqlk');
    table.json('kycxdgvgud');
    table.json('hhuddienaf');
  });
  await knex.schema.alterTable('qbtnenxqmi', function(table) {
    table.text('rurcpucoaa');
    table.text('easngwpgdk');
    table.json('emfzpekmmm');
    table.boolean('qztupbqaft');
  });
  await knex.schema.alterTable('julpuftgrv', function(table) {
    table.text('ewtwsuhicl');
    table.string('sfyhzynpso');
    table.boolean('zszwqqcflo');
    table.boolean('korrmezujk');
    table.json('phmluurvmy');
    table.text('eqaafusvuw');
    table.integer('cnfmzmsixv');
    table.float('karugwfxdi');
    table.float('wlmxklhgls');
    table.timestamp('injcecisvp');
  });
  await knex.schema.alterTable('kfsyjfcaik', function(table) {
    table.float('gqtzznejkj');
    table.bigInteger('rrwklufwfz');
    table.json('qucxornehy');
    table.bigInteger('mmqudbsitj');
    table.boolean('buqijvkejm');
  });
  await knex.schema.alterTable('jlguikjqcp', function(table) {
    table.integer('qpkpymnkax');
    table.float('qxuidrirdv');
    table.boolean('inptsdempb');
    table.timestamp('zyjzdynkpr');
    table.text('fyhxssgjlw');
    table.json('vbmpuygpnk');
    table.string('wyzvxwfjfp');
    table.float('qytsxwtqyg');
    table.boolean('ivgmxnwqer');
  });
  await knex.schema.alterTable('agjdlgmmva', function(table) {
    table.timestamp('ugrjjwesyk');
    table.float('iktbzxtrxj');
    table.bigInteger('naaulnengt');
    table.text('jzsxplecfy');
    table.string('vytblfnyih');
    table.string('rbqmcuyquh');
    table.integer('jsndssvyrc');
    table.text('jxbncvgoth');
    table.integer('zbrkrdnolv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};