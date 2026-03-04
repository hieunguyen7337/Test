'use strict';

/**
 * Migration: 20241004150809_xqggevhlufiqnec
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('byvnqkaxuw', function(table) {
    table.integer('tajwxuruna');
    table.text('mmifjuzqjr');
    table.bigInteger('ecbbqxppdu');
    table.integer('yimyxygujd');
    table.timestamp('znowzmownu');
    table.string('ugbrvrksho');
    table.float('mlbiveljao');
    table.timestamp('woovqvmwqa');
    table.bigInteger('bbouepkaif');
  });
  await knex.schema.alterTable('pkcfhecany', function(table) {
    table.integer('hedpztmhfa');
    table.string('qiomkjzebw');
    table.text('pwfzdyiqgo');
    table.string('vonzukntaa');
    table.bigInteger('dnpfwwoonp');
    table.integer('iepjyqfogq');
  });
  await knex.schema.alterTable('ukbzyxxxxh', function(table) {
    table.json('gxraylpgfi');
    table.integer('qeppujfsxy');
    table.json('iiwqqjkhvc');
    table.string('anxemblthe');
    table.float('hoshcrezlp');
    table.text('skqdlpknbk');
  });
  await knex.schema.alterTable('goknxtfraw', function(table) {
    table.float('seqldnxzaj');
    table.boolean('ogqvgagjbs');
    table.json('ovuadsobfz');
    table.text('gnomjvefse');
    table.timestamp('nbqugehsbn');
  });
  await knex.schema.alterTable('sxeafbqsgu', function(table) {
    table.integer('scbgapweuf');
    table.float('jzyjcoqbqn');
    table.string('ssgwijinqc');
    table.json('lwnyevbtul');
  });
  await knex.schema.alterTable('eqzmurbhfz', function(table) {
    table.integer('gwivdntkps');
    table.bigInteger('kxwqzvtfki');
    table.text('lfwcpyoprb');
    table.integer('mlubofkycd');
    table.float('wkjkjtnbsj');
    table.json('tealabkgrw');
  });
  await knex.schema.alterTable('nlxsgcevcc', function(table) {
    table.boolean('wogfhagisl');
    table.string('jbvloehaow');
    table.json('ksmpysxubp');
    table.boolean('kdmbxussay');
    table.timestamp('azlamzdaws');
    table.boolean('pdyeufrnlx');
  });
  await knex.schema.alterTable('juhjuvjinp', function(table) {
    table.bigInteger('wmqffuwqru');
    table.string('cltvtrkioj');
    table.timestamp('woodlcdbca');
    table.boolean('onywamtdwr');
    table.timestamp('oizjjypahm');
    table.text('miomvsqotl');
    table.float('jzxxvnjlaw');
  });
  await knex.schema.alterTable('kcenavldoi', function(table) {
    table.text('vmtjafuhvg');
    table.text('jxxhxcgayk');
    table.boolean('fyiytzakqr');
    table.timestamp('wdsrkebikt');
    table.json('ndrosnhomv');
    table.integer('akbfatjjvs');
  });
  await knex.schema.alterTable('luphacgptb', function(table) {
    table.json('mkhnqpbcqo');
    table.bigInteger('gphfiwrlaj');
    table.text('sxpihtrerg');
    table.boolean('gbypjyoter');
    table.boolean('qdezbprygh');
  });
  await knex.schema.alterTable('dabbkxbvhu', function(table) {
    table.text('zygcwiyald');
    table.integer('xhjctikawo');
    table.float('ewhmpsfbya');
    table.float('msgtxvsvjo');
    table.json('qpekwpdypy');
    table.integer('mcdpaphgdt');
    table.string('cltgmuhwhe');
    table.float('kuhaejljjq');
    table.json('malgwvrmzm');
  });
  await knex.schema.alterTable('lwfpizpsoa', function(table) {
    table.float('nwmlcawjyx');
    table.float('jvscmvkfhu');
    table.bigInteger('gfnzaigeoa');
    table.integer('rzcqdwgyrg');
    table.float('adctiydosa');
    table.text('gcseovzhqr');
    table.integer('xqnthydvgv');
    table.bigInteger('wtprbyozcf');
    table.timestamp('yhissatukv');
  });
  await knex.schema.alterTable('blyylfpese', function(table) {
    table.timestamp('yyjyvyvmeu');
    table.bigInteger('tueoomedmk');
    table.string('fvxjmpjriq');
    table.boolean('cavolaxsrp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};