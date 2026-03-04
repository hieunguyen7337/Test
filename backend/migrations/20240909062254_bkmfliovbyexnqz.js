'use strict';

/**
 * Migration: 20240909062254_bkmfliovbyexnqz
 * Description: Please work this time
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tdxsqbocsc', function(table) {
    table.bigInteger('ihdiqhujvy');
    table.integer('hyieegcvgv');
    table.json('jbdzzxoopg');
    table.integer('wwxxxahxlg');
    table.float('mmfaypszoy');
    table.float('rlfgzkuorb');
    table.text('lmihlyqchu');
    table.string('loyctnsspa');
    table.bigInteger('egmocdkvjr');
    table.string('xzvdbcrqqa');
  });
  await knex.schema.alterTable('klpjadkrvh', function(table) {
    table.string('kmksxyrdaa');
    table.text('acsqjvpiga');
    table.boolean('qtktgoichd');
    table.json('hwjvpndflc');
    table.json('vvdrlkuomg');
    table.integer('rpowyxuomh');
    table.timestamp('zketgfxbtm');
    table.bigInteger('setfgibvwu');
  });
  await knex.schema.alterTable('mpgwevxltf', function(table) {
    table.boolean('enqyhnkxxe');
    table.text('bvokhzhnns');
    table.float('njzghchnun');
    table.text('kqmmpmohef');
    table.bigInteger('cqunruwfme');
    table.integer('jyuppbqvrd');
    table.json('yxxinmpgva');
  });
  await knex.schema.alterTable('nnpubfxymj', function(table) {
    table.bigInteger('sdojcxdseu');
    table.string('fywljwapwr');
    table.float('fgfjlesgzj');
    table.string('vbfoetsghu');
    table.string('nvognzzvnq');
    table.string('vcglgpuusu');
    table.boolean('rmdvswqune');
    table.float('zgyebrcugs');
    table.string('dwntgrrrjr');
    table.boolean('ijquejywyt');
  });
  await knex.schema.alterTable('kpefpcjdqo', function(table) {
    table.float('nzptfbcexf');
    table.bigInteger('edftiyfkyk');
    table.string('vgjcexyfrn');
    table.boolean('hxlsrvozhb');
  });
  await knex.schema.alterTable('mhodpvpzyi', function(table) {
    table.float('nxydjvurnv');
    table.text('pgkfzxainp');
    table.integer('iqufljsnbf');
    table.json('lmqalkgtyz');
  });
  await knex.schema.alterTable('awnzfqtuig', function(table) {
    table.json('fsoggxhgul');
    table.timestamp('vjmzxqhjpk');
    table.string('pimcpbscnu');
  });
  await knex.schema.alterTable('weluhehuvz', function(table) {
    table.boolean('eqruisycyk');
    table.text('jywryobjoi');
    table.float('ajgqchqpec');
    table.json('drushylffw');
    table.float('hhphvknswt');
    table.bigInteger('iqxigwyams');
    table.text('jxggkicplc');
  });
  await knex.schema.alterTable('zomovtvteq', function(table) {
    table.text('ydlinpfram');
    table.integer('nmpzepwivm');
    table.bigInteger('rpdulsyzsw');
    table.integer('rzratfhfbi');
  });
  await knex.schema.alterTable('fqihtmzdzk', function(table) {
    table.string('mqzlltznmj');
    table.text('lwwoqfmkxa');
    table.text('tqaacduvvx');
    table.string('jxlxydllzn');
  });
  await knex.schema.alterTable('rrgblbbnbu', function(table) {
    table.bigInteger('wbwnhrakue');
    table.integer('aaxvouwfbh');
    table.float('dlxtkqqvjl');
    table.timestamp('mcptczydqg');
    table.boolean('eyxptwctpg');
    table.float('qqttreongl');
    table.string('hlzfaguoec');
  });
  await knex.schema.alterTable('mlvtganadb', function(table) {
    table.string('bxzbcsitzc');
    table.string('zohblhdjem');
    table.text('ruwvscgjot');
    table.integer('fbrfzdduri');
    table.json('tlhvfpxtoq');
    table.string('iwbvbxgabz');
    table.string('rhgkduilrn');
    table.text('axmxkojsfd');
  });
  await knex.schema.alterTable('yhbpmcnuav', function(table) {
    table.text('axquerqcto');
    table.float('riytefxbnz');
    table.text('rqhqlzkoau');
    table.boolean('apekfpgcim');
  });
  await knex.schema.alterTable('ljnmxzliyf', function(table) {
    table.boolean('zvamrfwlyk');
    table.float('rphvsxepwi');
    table.string('alexpmjpgv');
    table.integer('swgssceixs');
    table.bigInteger('afbnsshzhq');
    table.bigInteger('twapqoafyq');
    table.integer('ibznvdjpxx');
    table.float('fgnfdlxiki');
  });
  await knex.schema.alterTable('qbwikivmhl', function(table) {
    table.bigInteger('agfnccyjnd');
    table.json('rxdajrefrj');
    table.text('kahuehszgv');
    table.text('ikzzjiqeje');
    table.text('hdfelkxeyl');
    table.bigInteger('strpqarqwj');
    table.boolean('ibjefocpew');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};