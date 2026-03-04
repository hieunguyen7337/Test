'use strict';

/**
 * Migration: 20240307225241_azyhslnysmihvoe
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fydxunuyuv', function(table) {
    table.bigInteger('gaepafwlnd');
    table.boolean('unaydsvfqu');
    table.json('cqowzqnyof');
    table.text('oqmzwvtzgj');
    table.json('dxkwastqlf');
  });
  await knex.schema.alterTable('mgwinyjgxf', function(table) {
    table.text('zoejitsicz');
    table.text('mmxjghdzmp');
    table.integer('fdnaekwlee');
    table.float('kwqbkvixav');
    table.string('mhamkzohly');
    table.string('walnhifajn');
    table.string('uydenhygtm');
    table.json('rvwdregieg');
    table.float('oqftukukeh');
    table.json('hitpajprmk');
  });
  await knex.schema.alterTable('phvlaegagm', function(table) {
    table.integer('kwrcbszcoe');
    table.string('ygqcctygmo');
    table.float('utmglkjkpo');
    table.float('qozofhjdhs');
    table.integer('yfmygzeyzj');
    table.boolean('tsrlnadwne');
    table.bigInteger('mjsnjsprfk');
  });
  await knex.schema.alterTable('nuoxchafoj', function(table) {
    table.integer('tviagcuogi');
    table.string('blsxignxtc');
    table.float('kgysskaujp');
    table.json('rwbwdwovml');
    table.text('eoexrchyal');
    table.integer('qpspxygner');
    table.string('ppfardwitx');
    table.float('letiixedfr');
    table.json('uqfipmmdzx');
    table.json('zpwkazrgqa');
  });
  await knex.schema.alterTable('jpqvjyhywv', function(table) {
    table.timestamp('qmtmqoznzu');
    table.integer('yeictogfut');
    table.boolean('racysuspzo');
    table.text('epctsqljrp');
    table.text('zopgfxnuim');
    table.json('jwljcnkysd');
    table.string('auaflmykzk');
    table.json('kxfjwzehey');
  });
  await knex.schema.alterTable('canewowwge', function(table) {
    table.boolean('sekbvddjfr');
    table.float('eohwgqnyzc');
    table.boolean('suttxkxjvu');
  });
  await knex.schema.alterTable('xpfxusprof', function(table) {
    table.json('vwzfxttawx');
    table.integer('uvphpzxmul');
    table.timestamp('ltzxhauduu');
    table.float('iwuttuhsjf');
    table.timestamp('sdxvdqobua');
    table.boolean('jcggrihhui');
    table.bigInteger('ytqehbweff');
    table.boolean('tlcgyqlqjv');
  });
  await knex.schema.alterTable('uwccbhuyfq', function(table) {
    table.json('sjuoofzmqo');
    table.timestamp('ryozsmlwme');
    table.float('onbmpdxlco');
    table.timestamp('kphkvbovgb');
    table.json('vhtwzwdois');
    table.string('irwkazwhfq');
    table.bigInteger('rinebrohtn');
    table.string('wvptplbede');
    table.text('atggdieiav');
  });
  await knex.schema.alterTable('eidofotvro', function(table) {
    table.string('mepqozgfhh');
    table.json('vmnrppjuuc');
    table.string('hmfxqxydnw');
    table.timestamp('dlupfrpxav');
    table.float('apasbofsqi');
    table.timestamp('gbjlhjmjeq');
    table.text('azdayxidkq');
    table.timestamp('qzdansayom');
    table.text('gladmbenen');
    table.integer('jluqxnabdq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};