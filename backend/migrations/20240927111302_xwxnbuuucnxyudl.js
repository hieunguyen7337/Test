'use strict';

/**
 * Migration: 20240927111302_xwxnbuuucnxyudl
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xxwcsvlxlv', function(table) {
    table.float('zuobqgafwm');
    table.boolean('kprotuemzg');
    table.timestamp('tufqjcwowl');
  });
  await knex.schema.alterTable('fsqtwzpkva', function(table) {
    table.timestamp('xbyyifkxqa');
    table.text('mmwroaecjj');
    table.timestamp('oalxlqufej');
  });
  await knex.schema.alterTable('wledmfkemb', function(table) {
    table.integer('idopmwxfzc');
    table.timestamp('chzappccni');
    table.boolean('hnwxwwonkk');
    table.string('zvxvfmanpy');
    table.string('alryzokesp');
    table.integer('wiiomexoot');
    table.text('dkokrhkkim');
    table.boolean('kurusrmltz');
    table.string('zdkilaylhi');
    table.string('lzqlevlibo');
  });
  await knex.schema.alterTable('swspogauom', function(table) {
    table.integer('ytplejmgon');
    table.integer('prdgzvfczu');
    table.timestamp('bdijdmpxfs');
    table.string('gygklszptn');
    table.timestamp('iuiedxiqgw');
    table.boolean('xqqwkwrbqn');
    table.string('xmfnmrowjv');
    table.float('ynaqbyvzhp');
    table.boolean('cgrooahpby');
  });
  await knex.schema.alterTable('txjcgbbqqp', function(table) {
    table.timestamp('sagweeiyqc');
    table.float('rlvsepxhxp');
    table.json('twvwdbwduw');
    table.integer('nowvskmfag');
    table.timestamp('vqlmdtjcei');
    table.timestamp('unnarrwqra');
    table.json('pjreyeunox');
    table.integer('flacvvqoft');
  });
  await knex.schema.alterTable('ljdbmauarh', function(table) {
    table.float('hggrlnmkjc');
    table.string('gzzdrutupj');
    table.timestamp('kddxtatvgb');
    table.bigInteger('cphzkelqmv');
    table.timestamp('aakadqplhr');
    table.json('otkeurfqss');
    table.boolean('lfdsxnzgkk');
    table.integer('etpbvybrfq');
    table.float('cmryhrfnxj');
    table.boolean('gtnpngubpn');
  });
  await knex.schema.alterTable('onnvtdbzcj', function(table) {
    table.float('imjddyophe');
    table.json('ktxjhwswyw');
    table.bigInteger('jpeonzpdud');
    table.bigInteger('iyrsrxxtax');
    table.json('xsteflvnpl');
    table.integer('nceuygffbn');
    table.timestamp('qyfovlpagv');
    table.text('zyxdvijkfu');
    table.boolean('visspmersc');
    table.integer('wzyzjkyajz');
  });
  await knex.schema.alterTable('omqzcaunks', function(table) {
    table.string('qayqdgyzxw');
    table.text('yguvcbfggu');
    table.timestamp('vwagbqrghu');
    table.timestamp('luimynwebe');
  });
  await knex.schema.alterTable('amrpqnvgio', function(table) {
    table.integer('oqvgjgtdiw');
    table.boolean('ovekvefsrd');
    table.json('uzokqzhrwb');
    table.string('corhhpsrke');
    table.bigInteger('kgxeqpqyva');
    table.boolean('skeimgsqmd');
    table.json('qaifafimqe');
  });
  await knex.schema.alterTable('czohwkuktv', function(table) {
    table.float('uzgxsjecjp');
    table.json('bornejxqhd');
    table.timestamp('ohxhtniygi');
    table.timestamp('zhzijsdewd');
    table.text('uuopdgtbva');
    table.timestamp('jgsytyxpwn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};