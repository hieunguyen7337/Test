'use strict';

/**
 * Migration: 20240418031602_loypjqlrmztkwww
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hyajjwncyn', function(table) {
    table.timestamp('pmmbfnavow');
    table.string('lviyxjtrli');
    table.bigInteger('auqgdepgml');
    table.text('mytnhdymeh');
  });
  await knex.schema.alterTable('oveeispaty', function(table) {
    table.boolean('fsnaycmvil');
    table.float('uevjgjyzyh');
    table.bigInteger('owfcjmojvy');
    table.string('qdeqmgyinp');
    table.float('nktztqwsfz');
    table.boolean('dixaeswdbo');
  });
  await knex.schema.alterTable('asmsgegcyw', function(table) {
    table.integer('nlxtzcikrh');
    table.float('bxdhkpnqav');
    table.json('qpqnpeweib');
    table.json('rfyfnuujfd');
    table.integer('uwbwbqrsns');
    table.float('nvskanuium');
    table.string('tjlvjvgaqc');
    table.bigInteger('kyswasyeyn');
  });
  await knex.schema.alterTable('nqfelncnac', function(table) {
    table.float('otkdhqbtys');
    table.float('hfjssgavpi');
    table.timestamp('epuuelgswr');
  });
  await knex.schema.alterTable('lqzjqecbli', function(table) {
    table.bigInteger('rojcgzrvnu');
    table.json('yjfnmxxmuy');
    table.string('scmvweupdc');
    table.timestamp('xdaserdjnh');
    table.integer('kimaplgamm');
    table.bigInteger('bbsdkrztnq');
  });
  await knex.schema.alterTable('xcdbvgjtna', function(table) {
    table.float('xmlgztykek');
    table.boolean('cndvkqbwie');
    table.text('nirisszwas');
    table.text('tgkfntkqpy');
  });
  await knex.schema.alterTable('iedxvcwbvv', function(table) {
    table.string('vgozhlmdbz');
    table.integer('jcmcerrsnv');
    table.boolean('renzwkuirb');
    table.timestamp('eshzgayywd');
  });
  await knex.schema.alterTable('uxzmebgmtf', function(table) {
    table.text('eyzqqpeskz');
    table.boolean('ljhqrwacqt');
    table.string('jzwmczgbkq');
    table.boolean('hrxwklpnid');
    table.integer('yntzwgdpgp');
    table.string('fozkjadmzq');
    table.boolean('isfcfpudel');
    table.timestamp('cbbpkfuznt');
    table.float('lwjgwwjxov');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};