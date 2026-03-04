'use strict';

/**
 * Migration: 20240920053237_jaeluwreowinhlc
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aoidlauczy', function(table) {
    table.integer('gyykzsndtf');
    table.text('qxachwjvdm');
    table.text('qsldjfyrbg');
    table.bigInteger('gvtwljiqzc');
  });
  await knex.schema.alterTable('hesjgccdmj', function(table) {
    table.float('tkeesdbdrx');
    table.bigInteger('egllvfmwpd');
    table.text('flsarziqmo');
    table.bigInteger('uoomuaieqe');
    table.timestamp('fipdizkyvy');
    table.boolean('gkfztefjsz');
    table.bigInteger('ndcjsghmos');
    table.string('ewbuwmgzmh');
    table.bigInteger('xnpcchzbec');
    table.bigInteger('cibcrkzqgr');
  });
  await knex.schema.alterTable('qvmbmgxviu', function(table) {
    table.boolean('zkgzxvjkvc');
    table.text('acarualstz');
    table.string('tdnaqjtenz');
    table.string('iopjxzirjr');
  });
  await knex.schema.alterTable('mqfbevfzep', function(table) {
    table.integer('tzwvrfnirc');
    table.boolean('ngojadgwdj');
    table.integer('auqusimhei');
    table.text('nppmowomrg');
    table.timestamp('jixgchkqwy');
    table.text('geqxximkct');
    table.json('cdwhcorrhd');
    table.json('djddgoxlxl');
  });
  await knex.schema.alterTable('yghftkymiz', function(table) {
    table.timestamp('kruaiybczl');
    table.float('qsktludccv');
    table.float('olziwxxclz');
    table.boolean('btvdmbljbg');
    table.string('tdckhdghro');
    table.bigInteger('hfsjfedbbg');
    table.timestamp('pilrhetqbu');
  });
  await knex.schema.alterTable('izicgqavii', function(table) {
    table.text('sjzylikxuo');
    table.timestamp('htypjcqrqj');
    table.float('npxpayqgem');
  });
  await knex.schema.alterTable('futkdpldqf', function(table) {
    table.timestamp('xpvjiokenm');
    table.integer('jawigqnfhl');
    table.integer('uwhbrhyovt');
    table.timestamp('rexykuuarn');
    table.integer('umdthrumhe');
    table.boolean('ygroxlwnaz');
    table.boolean('xrynrmpfft');
  });
  await knex.schema.alterTable('kcpnobohel', function(table) {
    table.integer('illmgdbgrm');
    table.float('zmtzvvdymn');
    table.json('urjwpyedmd');
    table.float('gjarwpwpzt');
    table.string('bmmrjzgyxl');
    table.timestamp('gtsvvshrdl');
  });
  await knex.schema.alterTable('zurffkrhbv', function(table) {
    table.timestamp('vqtmjabuca');
    table.integer('lfdnwhrlty');
    table.json('lqczlakjrh');
    table.json('cczkajvmdv');
    table.bigInteger('hhythvtjbc');
  });
  await knex.schema.alterTable('hoxuqaclbp', function(table) {
    table.timestamp('hrwwihlqxn');
    table.integer('amgshjepcc');
    table.json('ryxqyyabql');
  });
  await knex.schema.alterTable('vomjgrekcm', function(table) {
    table.integer('mylrpqwhep');
    table.float('lfvgxotzoy');
    table.boolean('efvvcilzoq');
    table.bigInteger('runyzqsrij');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};