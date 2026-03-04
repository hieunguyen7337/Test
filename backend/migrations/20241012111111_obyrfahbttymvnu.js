'use strict';

/**
 * Migration: 20241012111111_obyrfahbttymvnu
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gqnjnpspab', function(table) {
    table.boolean('kmfmyxpzqv');
    table.float('ewdpmkbnyz');
    table.integer('tndkkwzklh');
    table.string('ghvrfdrzvo');
    table.boolean('ipvxhmjooj');
  });
  await knex.schema.alterTable('oedtlcrvma', function(table) {
    table.boolean('ownahwyzcd');
    table.timestamp('uizydbocdh');
    table.integer('ifdjpdfjwi');
  });
  await knex.schema.alterTable('qklzwrflyp', function(table) {
    table.timestamp('tzfdpmvqqy');
    table.bigInteger('cbmsmhfcpg');
    table.float('usgcxyfdou');
    table.string('zoywsuthzw');
    table.float('evgtjglenj');
    table.json('iwmapcilww');
    table.string('nlfgqmphqs');
    table.timestamp('jygmhobsre');
    table.integer('tcgzonchpy');
  });
  await knex.schema.alterTable('fbwndscanm', function(table) {
    table.bigInteger('xaczktjtic');
    table.text('txvbhszupy');
    table.string('wmpmixwdkl');
    table.float('qvnqshqsqd');
    table.text('kfasbcbjtq');
    table.json('ltasfrpjjp');
    table.timestamp('dddpgmiomp');
  });
  await knex.schema.alterTable('sxgytnmbty', function(table) {
    table.json('dzpwmadnbr');
    table.integer('xrzbiulgcl');
    table.text('tlbaxbpquw');
    table.boolean('oqjjlfpgyx');
    table.string('pmedjsaqus');
    table.bigInteger('gyfcggkryg');
    table.string('rymlyqfdme');
  });
  await knex.schema.alterTable('fsgyxezoxw', function(table) {
    table.float('dbkvrnxswm');
    table.integer('gychcnfucn');
    table.integer('eknnkrbewz');
    table.boolean('sbfprxzcun');
    table.timestamp('tcrmsbbewe');
    table.integer('hfobneowny');
    table.boolean('plrjvwtozn');
    table.boolean('xnppfhfoxo');
  });
  await knex.schema.alterTable('vsolaravvo', function(table) {
    table.timestamp('afybhztiwg');
    table.timestamp('sdigwwcpfd');
    table.bigInteger('hrhrituhtz');
    table.float('qbxwxeupbr');
    table.timestamp('lhjapnurpi');
    table.boolean('uynxxdvwml');
    table.bigInteger('nezkaudxzk');
    table.timestamp('jnwzbrjliv');
    table.string('oyodwsutkb');
    table.json('fiyjzkshrk');
  });
  await knex.schema.alterTable('micvddctek', function(table) {
    table.timestamp('nyyvoekngz');
    table.timestamp('ammaqpkmxw');
    table.boolean('voiujxwkdn');
    table.string('gilwuyftki');
    table.integer('pyabhmtgez');
    table.string('ndziozzwou');
    table.text('fqbmogeilk');
  });
  await knex.schema.alterTable('estcxpenpg', function(table) {
    table.bigInteger('ygtcapgjqe');
    table.json('nokothnhwg');
    table.float('nhnxhnqgrg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};